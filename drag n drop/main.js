let slots = document.querySelector('.slots');
var openModal = document.querySelector('.task_button');
var modal = document.getElementById('data_modal');
var randomId = 0;
var editIndex, deleteIndex;
let innerSlots = Array.from(document.querySelectorAll('.inner_slot'));
var randomId1 = 0;
var trashbin = document.querySelector('.inner_slot');

// opening modal with with button created in html 
openModal.addEventListener('click', function () {
    modal.classList.add('modal_overlay--active');
});

// function of creating a new task with buttons
function createTask() {
    var newTask = document.createElement('div');
    var text = document.createElement('p');
    var btnEdit = document.createElement('button');
    var btnDelete = document.createElement('button');
    btnEdit.classList.add('btnEdit');
    btnEdit.innerHTML = 'Edit';
    btnDelete.innerHTML = "Delete";
    btnDelete.classList.add('btnDelete');
    newTask.classList.add('task');
    newTask.setAttribute('draggable', 'true')
    newTask.id = 'Id' + randomId++;
    text.innerHTML = document.getElementById('task').value;
    newTask.appendChild(text);
    newTask.appendChild(btnEdit);
    newTask.appendChild(btnDelete);
    document.querySelector('.inner_slot1').appendChild(newTask);
};

// creating a new task after pushing edit button in modal 
document.getElementById('data_form').addEventListener('click', (e) => {
    if (e.target.classList.contains('main_modal_mygtukas')) {
        e.preventDefault();
        createTask();
        modal.classList.remove('modal_overlay--active');
        document.getElementById('data_form').reset()
    }
});

// opening modal1 by clicking edit button, closing modals by clicking x, editing data in general
slots.addEventListener('click', function(e){
    if(e.target.classList.contains('btnEdit')){
        document.querySelector('.modal_overlay1').classList.add('modal_overlay--active');    
        document.querySelector('#task1').value = e.target.parentElement.firstChild.innerHTML;
        editIndex = e.target.parentElement.firstChild;
    }
    if(e.target.classList.contains('close_span')){
        modal.classList.remove('modal_overlay--active');
        document.querySelector('.modal_overlay1').classList.remove('modal_overlay--active');
    }
    if(e.target.classList.contains('main_modal_mygtukas1')){
        e.preventDefault();
        editIndex.innerHTML = document.querySelector('#task1').value;
        document.querySelector('.modal_overlay1').classList.remove('modal_overlay--active');
        document.getElementById('data_form1').reset()
    }
    if(e.target.classList.contains('btnDelete')){
        e.target.parentElement.remove();
    }
});

// dragstart - before dragging element we need to remember data (id) of an element that is being dragged
slots.addEventListener('dragstart', function (e) {
    if (e.target.classList.contains('task')) {
        // we will transfer data of an element (e.target) (in this case id) to another function
        e.dataTransfer.setData('elementId', e.target.id);
    }
});

// because we created an array from all the inner slots that contains our tasks, we will use forEach (array method)
innerSlots.forEach((item) => {
    // dragover - when using dragover we will check if we can drag our task to the exact element where we want by checking its class
    item.addEventListener('dragover', function (e) {
        // will check if an element doesnt have our class inner_slot and if it doesnt have (if true) we will stop the function(return)
        if (!e.target.classList.contains('inner_slot')) {
            return;
        }
        // standart event of dragover doesnt let an element to be dragged over another element, thats why we need to use prevent default
        e.preventDefault();
    });
     // Drop - we will drop our element where we want
     item.addEventListener('drop', function (e) {
        var elementId = e.dataTransfer.getData('elementId');
        var element = document.getElementById(elementId);
        console.log(element);
        e.target.appendChild(element);
        // and again standart drop doesnt let an element to be dropped there, so we prevent this default function
        e.preventDefault();
        if(e.target.classList.contains('trashbin')){
            element.remove();
            e.preventDefault();
        }
    });
});




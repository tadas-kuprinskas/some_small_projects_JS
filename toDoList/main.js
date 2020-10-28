var container1 = document.querySelector('.container_1');
var newTask = document.getElementById('new_task');
var addTask = document.getElementById('add_task');
var container2 = document.querySelector('.container_2');
var container3 = document.querySelector('.container_3');
var input = document.getElementById('new_task');
var body = document.querySelector('body');
var modalas = document.getElementById('duomenu_modalas');
var forma = document.querySelector('.forma');
var forma2 = document.getElementById('duomenu_forma');
var editMygtukas = document.querySelector('.main_modal_mygtukas');
var editIndex;

function creation() {
    var ul = document.createElement('ul');
    ul.classList.add('ulas');
    container2.appendChild(ul);
}

creation();

function creation1() {
    var ul = document.querySelector('.ulas');
    var li = document.createElement('li');
    var task = document.createElement('p');
    task.classList.add('task');
    var buttonAdd = document.createElement('button');
    buttonAdd.innerHTML = 'Task done';
    buttonAdd.classList.add('buttonAdd');
    var buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = 'Task delete';
    buttonDelete.classList.add('buttonDelete');
    var buttonEdit = document.createElement('button');
    buttonEdit.innerHTML = 'Edit';
    buttonEdit.classList.add('buttonEdit');
    task.innerHTML = input.value;
    li.appendChild(task);
    li.appendChild(buttonAdd);
    li.appendChild(buttonDelete);
    li.appendChild(buttonEdit);
    ul.appendChild(li)
}


forma.addEventListener('submit', function (e) {
    e.preventDefault();
    creation1();
    document.querySelector('.forma').reset()
});

body.addEventListener('click', function (e) {
    if (e.target.classList.contains('buttonDelete')) {
        e.target.parentElement.remove();
    }
});

body.addEventListener('click', function (e) {
    if (e.target.classList.contains('buttonEdit')) {
        modalas.classList.add('modal_overlay--active');
        document.getElementById('task').value = e.target.parentElement.firstChild.innerHTML;
        editIndex = e.target.parentElement.firstChild;
    }   
});

editMygtukas.addEventListener('click', function(e){
    e.preventDefault();
    editIndex.innerHTML = document.getElementById('task').value;
    forma2.reset()
    modalas.classList.remove('modal_overlay--active');
});

function creation2() {
    var ul1 = document.createElement('ul');
    ul1.classList.add('ulas1');
    container3.appendChild(ul1);
}

creation2();

body.addEventListener('click', function (e) {
    if (e.target.classList.contains('buttonAdd')) {
        var ul1 = document.querySelector('.ulas1');
        var addIndex = e.target.parentElement.firstChild;
        addIndex.classList.add('check');
        ul1.appendChild(addIndex);
        e.target.parentElement.remove();
    }
});
    




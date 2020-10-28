// pasiimu kintamuosius i global;
var enterData = document.getElementById('enterData');
var resetData = document.getElementById('resetData');
var tbody = document.getElementById('tBody'), rIndex;
var modalas = document.querySelector('.modal_background');
var modalas1 = document.querySelector('.modal_background1');
var enterClose = document.querySelector(".enterClose");
var enterClose1 = document.querySelector(".enterClose1");
var container = document.querySelector('.container');
var modalasDu = document.querySelector('.modalo_fonas');
var patvirtintiTrinima = document.querySelector('.patvirtini_trinima');
var spanClose = document.querySelector('.span_close');
// inputai is modalo
var data = document.getElementById('date');
var numeris = document.getElementById('number');
var kelias = document.getElementById('distance');
var laikas = document.getElementById('time');
var data1 = document.getElementById('date1');
var numeris1 = document.getElementById('number1');
var kelias1 = document.getElementById('distance1');
var laikas1 = document.getElementById('time1');
var deleteIndex, editIndex;

const duomenys = [];

// paspaudus enterdata iskvieciu modala pridedamas klase 
container.addEventListener('click', function (event) {
    if (event.target.classList.contains('enterData')) {
        modalas.classList.add('modal-active');
    }
});

function print() {
    tbody.innerHTML = '';
    for (var i = 0; i < duomenys.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < duomenys[i].length; j++) {
            var td = document.createElement('td');
            td.innerHTML = duomenys[i][j];
            tr.appendChild(td);
        }
        // delete mygtukas
        var delButton = document.createElement('button');
        delButton.classList.add('delete');
        delButton.innerHTML = 'delete';
        var deleteTd = document.createElement('td');
        deleteTd.appendChild(delButton);
        tr.appendChild(deleteTd);

        // edit mygtukas
        var editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = 'edit';
        var editTd = document.createElement('td');
        editTd.appendChild(editButton);
        tr.appendChild(editTd);
        tbody.appendChild(tr);
    }
}

// duomenu pridejimas
modalas.addEventListener('click', function (e) {
    if (e.target.classList.contains("enterClose")) {
        var naujasMasyvas = [data.value, numeris.value, kelias.value, laikas.value];
        duomenys.push(naujasMasyvas);
        print();
        modalas.classList.remove('modal-active')
    }
});

// Trynimas
// uzdedam eventa ant dinamiskai sukurto mygtuko
tbody.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('delete')) {
        modalasDu.classList.add('modalas-aktyvus');
        deleteIndex = e.target.parentElement.parentElement.rowIndex - 1;
    }
})

// eventas ant htmle sukurto mygtuko
patvirtintiTrinima.addEventListener('click', function () {
    duomenys.splice(deleteIndex, 1);
    modalasDu.classList.remove('modalas-aktyvus');
    print();
})

// REDAGAVIMAS
// Uzdedam eventa ant dinamiskai sukurto redaguoti mygtuko
document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.classList.contains('edit')) {
        modalas1.classList.add('modal-active');
        editIndex = e.target.parentElement.parentElement.rowIndex - 1;
        enterClose1.innerHTML = 'edit';

        // sudedam duomenis is masyvo i modalo inputus
        data1.value = duomenys[editIndex][0];
        numeris1.value = duomenys[editIndex][1];
        laikas1.value = duomenys[editIndex][2];
        kelias1.value = duomenys[editIndex][3];

        enterClose1.addEventListener('click', function () {
            var naujas1Masyvas = [data1.value, numeris1.value, kelias1.value, laikas1.value];
            duomenys.splice(editIndex, 1, naujas1Masyvas);
            print();
            modalas1.classList.remove('modal-active');
        });
    }
});

// reset tbody - istrina visa table data 
container.addEventListener('click', function (event) {
    if (event.target.classList.contains('resetData')) {
        // var table = document.querySelector("table");
        // for (var i = table.rows.length - 1; i > 0; i--) {
        //     table.deleteRow(i);
        // }
        var visiTr = document.querySelectorAll('tr');
        tbody.remove(visiTr);
        // kadangi visi tr istrinti, nebeleidzia rasyti nieko i tbody, refreshinu puslapi
        location.reload()
    }
});

// modalo uzdarymas x ir "ne" mygtukas
document.querySelector('body').addEventListener('click', function (event) {
    if (event.target.classList.contains('span_close') ||
        event.target.classList.contains('button2')) {
        modalasDu.classList.remove('modalas-aktyvus');
        modalas.classList.remove('modal-active');
        modalas1.classList.remove('modal-active');
    }
});



(function () {
    'use strict'

    // variaveis globais
    var $txtTask = document.querySelector('#txtTask');
    var $listTask = document.querySelector('#listTask');
    var $liTask = $listTask.querySelectorAll('li');
    var $btnTask = document.querySelector('#btnTask');

    // atrelando eventos
    $btnTask.addEventListener('click', insertTask);
    $txtTask.addEventListener('keyup', function(e) {
        if(e.keyCode === 13) {
            insertTask()
        }
    })

    for(let x = 0; x < $liTask.length; x++) {
        addEvent($liTask[x])
    }

    function toggleEvent(){
        this.classList.toggle('active')
    }

    //  funções
    function insertTask(e) {
        e.preventDefault();

        var liTask = document.createElement('li');
        var textTask = document.createTextNode($txtTask.value);

        liTask.setAttribute('class','list-group-item');
        liTask.append(textTask);
        $listTask.append(liTask);

        $txtTask.value = "";
        $txtTask.focus();
        addEvent(liTask);
    }

    function addEvent(li) {
        li.addEventListener('click', toggleEvent)
    }

})()
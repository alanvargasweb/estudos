(function () {
    'use strict'

    // variaveis globais
    var $image = document.querySelector('#main-image');


    var images = ['foto-1', 'foto-2', 'foto-3'];

    var currentImage = images[Math.floor(Math.random()*images.length)];

    $image.setAttribute('src','images/' + currentImage +'.jpg')

    console.log()


})()
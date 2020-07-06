(function () {
    'use strict'

    var $carrossel = document.querySelector('#carrossel');
    var $carrosselInner = document.querySelector('#carrossel-inner');
    var $carrosselItens = $carrosselInner.querySelectorAll('img');
    var $bullets = document.querySelector("#bullet");
    var bannerAtual = 0;
    var qtdBanners = $carrosselItens.length;

    var $btPrev = document.querySelector('#btPrev');
    var $btNext = document.querySelector('#btNext');

    $btPrev.style.display = 'block';
    $btNext.style.display = 'block';

    $btNext.addEventListener('click',showNext);
    $btPrev.addEventListener('click',showPrev);

    function showNext() {
        bannerAtual++;
        mostraBanner(bannerAtual);
    }

    function showPrev() {
        bannerAtual--;
        mostraBanner(bannerAtual);
    }

    function mostraBanner(bannerAtual) {
        var bannerWidth = getComputedStyle($carrosselItens[0]).width;
        bannerWidth = parseInt(bannerWidth)

        var novaPosicao = bannerWidth * bannerAtual * -1;
        $carrosselInner.style.marginLeft = '-800px';
        console.log($carrosselInner.style)
    }
})()
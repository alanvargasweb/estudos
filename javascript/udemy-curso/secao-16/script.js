(function () {
    'use strict'

    var $menu = document.querySelector('.list-group-flush');
    var $links = $menu.querySelectorAll('li a');

    window.addEventListener('scroll', destacaMenu);

    function destacaMenu() {
        var positions = []
        for (let i = 0; i < $links.length; i++) {
            positions[i] = pegaYposicaoScroll($links[i]);
        }

        var linkAtual = pegaUltimoLinkVisivel(positions);
        var linkActived = document.querySelector('.btn-primary');

        if(linkActived) {
            linkActived.classList.remove('btn-primary')
        }

        linkAtual.classList.add('btn-primary');
    }

    function pegaYposicaoScroll(link) {
        var alvo = document.querySelector(link.getAttribute('href'));
        var positionYViewport = alvo.getBoundingClientRect().top;

        return positionYViewport;
    }

    function pegaUltimoLinkVisivel(positions) {
        var qtd = positions.length;
        console.log(qtd)
        while (qtd) {
         qtd--;
            if (positions[qtd] < innerHeight / 2) {
                return $links[qtd];
            }
        }

        return $links[0];
    }

    destacaMenu()

})()
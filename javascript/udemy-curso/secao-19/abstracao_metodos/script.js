var blg = (function(){

    var bel = {};

    bel.$ = document.querySelector.bind(document);
    bel.$$ = document.querySelectorAll.bind(document);

    return bel;

}) ()
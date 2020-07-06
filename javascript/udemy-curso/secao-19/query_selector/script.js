window.addEventListener('DOMContentLoaded', function() {


    var _p1 = document.querySelectorAll('p');
    // get element é um metodo vivo que reflete as alterações
    var _p2 = document.getElementsByTagName('p');

    console.log("query selector" + _p1.length)
    console.log("get element" + _p2.length);

    var newP = document.createElement('p');
    newP.textContent = 'Novo Texto';
    document.body.appendChild(newP);

    console.log("query selector" + _p1.length)
    console.log("get element" + _p2.length);
})
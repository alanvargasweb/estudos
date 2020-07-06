var x = 0;
var y = 0;

function mostra() {
    var x = 10;
    var y = 10;
    console.log('valor de x é ' + x);
    console.log('valor de y é ' + y);
}

mostra()

console.log('valor de x é ' + x);
console.log('valor de y é ' + y);

(function () {
    'use strict';

    function somar(arr) {

        var result = 0;
        var x = 0;

        while (arguments[x]) {
            result += arguments[x];
            x++;
        }
        console.log('O sesultado é ' + result);
    }

    somar(15,5,15,5,15,5,15,5);
})();


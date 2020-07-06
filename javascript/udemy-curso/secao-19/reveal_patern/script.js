// var beluga = {
//     number: {
//         value: 0,
//         add: function (n) {
//             this.value += n
//         },
//         log: function () {
//             console.log(this.value);
//         },
//         clear: function () {
//             this.value = 0;
//         }
//     }
// }

// com reveal patern

var beluga2 = (function () {
    'use strict'

    var n = 0;

    function isNumber (_n) {
        return typeof _n === 'number';
    }


    function _add(_n) {
        if (isNumber(_n)) {
            n += _n;
        }
    }

    function _remove(_n) {
        if (isNumber(_n)) {
            if (_n <= n) {
                n -= _n;
            }
            else {
                console.log("O valor não deve ficar abaixo de 0")
            }
        }
    }

    function _log() {
        console.log(n);
    }

    function _clean() {
        n = 0;
    }

    return {
        add: _add,
        log: _log,
        clean: _clean,
        remove: _remove
    }
})()
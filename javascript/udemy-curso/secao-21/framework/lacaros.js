var lacaros = (function() {
    var lcr = {}

    lcr.$ = document.querySelector.bind(document);
    lcr.$$ = document.querySelector.bind(document);

    Array.prototype.getMedia = function() {
       // return _calcularMedia.apply(this, this);
       // com o es6
       return _calcularMedia(...this)
        console.log(this)
    }

    function _calcularMedia() {
        let params = arguments;

        let hasNan = Array.prototype.some.call(params, (n) => isNaN(n));
        if (hasNan) throw new Error('Somente números')

        let valorTotal = Array.prototype.reduce.call(params, function(total, atual) {
            return total + parseFloat(atual);
        });
        return (valorTotal / arguments.length).toFixed(2);
    }

    lcr.calcularMedia = _calcularMedia;


    return lcr;
})()
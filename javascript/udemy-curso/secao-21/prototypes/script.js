/*

Prototipos são a base da herança, uma forma 
compartilhar prop/met entre todas as instancias

compartilhamento por hierarquia

ex

Automovel() {
    velocidade
}


Carro = new Automovel() {

    carro herda de automovel
}
*/


function Automovel(_marca, _combustivel) {
    this.marca = _marca;
    this.velocidade = 0;
    if(_combustivel) {
        this.combustivel = _combustivel;
    }
    
}

Automovel.prototype.combustivel = "Alcool";

Automovel.prototype.abastecer = function() {
    console.log(`Veículo movido a ${this.combustivel}`)
    return this.combustivel;
}

Automovel.prototype.acelerar = function(_acelerar) {
    this.velocidade += _acelerar;
}


// estanciando classes
// var carro = new Automovel('Gol','Alcool');
// var moto = new Automovel('Honda', 'Etanol');
// var trator = new Automovel("Agralle");

function Carro(_modelo, _marca, _combustivel) {
    this.modelo = _modelo;
    Automovel.call(this, _marca, _combustivel)
    this.constructor = Carro;
}

Carro.prototype = new Automovel(this.combustivel);

var fox = new Carro('2020', 'Fox');
fox.acelerar(50)
console.log(fox)


// moto.abastecer()
// carro.acelerar(300);

// console.log(carro, moto, trator);

// function teste() {

//     Array.prototype.forEach.call(arguments, function(argument) {
//         console.log('Argumento ' + argument);
//     })
// }

// teste('teste', 'olá munso', 2, true);



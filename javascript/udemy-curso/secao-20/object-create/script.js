// literal

var objLiteral = {
    name: 'obj1',

    meth: function() {
        console.log('teste')
    }
}

// formal

var objFormal = new Object() 
objFormal.name = "Objeto formal";
objFormal.meth = function() {
    console.log('Objeto criado formalmente')
}

// utilizando função

function objFunction(_nome) {
    this.nome = _nome;
    this.mostraNome = function(msg) {
        console.log(`${this.nome} says ${msg}`);
    }
}


// O object create cria uma relação entre dois objetos o principal e a matriz
// o objeto filial vai herdar todos atributos e metodos da matriz



function Pessoa(_nome) {
    this.nome = _nome;
    this.idade = 676;
    this.endereco = 'Rua Brasil';

}

var pessoa = new Pessoa('Alan');
var copia = Object.create(pessoa);
copia.nome = "Copia"


function Carro(_marca) {
    this.marca = _marca;
    this.modelo = 'Celta';
    this.andar = function() {
        console.log('Em movimento');
    }
}



var fusca = new Carro("Fusca");
var carro2 = Object.create(fusca);


function Veiculo(_marca) {
    this.marca = _marca;
    this.velocidade = 0;
    this.andar = function(_vel) {
        this.velocidade += _vel
    }
}

var moto = new Veiculo('Honda');
var veiculo2 = Object.create(moto);
veiculo2.cilindradas = 360;




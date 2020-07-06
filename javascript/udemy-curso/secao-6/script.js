function acelera(vel) {
    if(vel > this.velocidade) {
        this.velocidade += vel;
    } else {
        console.log("Não é possivel diminuir a velocidade");
        this.velocidade = this.velocidade;
    }
}

function freia(){
    this.velocidade -= vel;
}

var carro = {
    fabricante: 'Renault',
    marca: 'Sandero',
    modelo: 'sedan',
    velocidade: 100,
    ano: '1995',
    marcha: '5',
    acelera: acelera,
    freia: freia
}
carro.acelera(200);

console.log(carro);
var Carro = (function(window){
    'use strict'

    function _carro(modelo, fabricante, ano) {
        var combustivel = 'gasolina';
        var velocidade = 0;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.ano = ano;
    
        this.getVelocidade = function() {
            return velocidade;
        }
    
        this.acelera = function(vel) {
          if(vel > 120) {
              console.log('A velocidade máxima para essa via é de 120')
              return  velocidade;
          }
    
          return  velocidade = vel;
        },
    
        this.getCombustivel = function() {
            return combustivel;
        }
    }

    return _carro;
})(window)




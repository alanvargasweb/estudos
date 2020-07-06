var obj = {
    value: 1,
    add: function(n) {
        this.value += n;
        return this;
    },
    log: function() {
        console.log(this.value);
        return this;
    }
}


function Add() {
    this.value = 0;
    this.add = function(n) {
        this.value += n;
        return this;
    }

    this.clear = function() {
        this.value = 0;
        return this;
    }
    this.log = function() {
        console.log(this.value);
        return this;
    }
}


/*
Exemplo

var teste = new Add()

teste.add(5).add(6).log();

retorna
13


*/


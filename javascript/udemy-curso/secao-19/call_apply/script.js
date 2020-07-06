function teste(str, n) {
    console.log('teste', str, n);
    console.log(this)
}



var obj1 = {foo: 'bar'}
var obj2 = {foo: 'bar2'}

teste()
teste.call(obj1, 'minha string', 10)
var arrTeste = ['meu text', 20]
teste.apply(obj2,arrTeste)

/*

    Os metodos call e aply servem para poder mudar o valor de this de dentro de uma 
    

    -> com o metodo call se passa os parametros normalmente
    teste.call(obj1)

    -> com o metodo apply passa os parametros como um array
    teste.apply(obj2)


*/
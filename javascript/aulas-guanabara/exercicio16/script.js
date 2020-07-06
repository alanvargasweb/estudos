function parImpar(val) {
    if(val%2 == 0) {
        return 'Par';
    } else {
        return 'Impar';
    }
}


function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}

var teste = parImpar(33);
var teste2 = soma();
console.log(teste);
console.log(teste2);

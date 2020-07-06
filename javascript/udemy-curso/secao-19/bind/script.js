

// function teste() {
//     console.log(this)
// }

// var teste2 = teste.bind("bari baba baba baa aaa aaa");

// document.addEventListener('click', teste2);

/*

Através do bind, conseguimos mudar o escopo de this, a diferença entre o call e o apply, é que ele muda quando chamamos a funação. Já o apply e o call, o programador que vai ter que mudar


*/


// (function() {
//     this.valor = 10;
//     const modulo = {
//         valor: 20,
//         getValor: function() {
//             return this.valor
//         }
//     }

//     console.log(modulo.getValor())

//     const getValor = modulo.getValor.bind(this)

//     console.log(getValor())
// })()



const cachorro = {
    nome: 'Thor',
    idade: 5,
    idadeCanina() {
        return this.idade * 7;
    },
    falar(vezes = 2, texto = 'au au') {
        console.log(`${this.nome} falou ${texto} ${vezes} vezes`);
    }

}


const pessoa = {
    nome: 'Alan',
    idade: '134',
    falar(palavras) {
        console.log(`${this.nome} falou ${palavras}`);
    },
    comer(comida, quando) {
        console.log(`${this.nome} comeu ${comida} em ${quando}`);
    },
    // latir(vezes = 4, texto = 'yo yo yo') {
    //    cachorro.falar.apply(this,[vezes, texto] )
    // }
   
}

pessoa.latir = cachorro.falar.bind(pessoa, 40)
// console.log(cachorro.idadeCanina());
// console.log(pessoa.comer('mixto quente', 'café da manha'));
// console.log(cachorro.comer.call(pessoa, 'ração', 'tarde'));
// cachorro.falar.call(pessoa, 30, 'boa noite')
// cachorro.falar.apply(pessoa, [30, 'oi'])
//console.log(pessoa.latir());
pessoa.latir()
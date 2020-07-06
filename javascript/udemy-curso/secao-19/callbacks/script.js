
// function foo() {
//     console.log('foo');
// }

function foo(str) {
    // eu passei por paramentro para dentro dessa função a str
    console.log('Olá', str);
}

// function executa(cb) {
//     // verifica se existe a variavel e se ela é uma função
//     if(cb && typeof cb === 'function') cb();
// }

function executa(cb) {
    // executará a função CB passando olá
    var ola = "mundo";
    if(cb && typeof cb === 'function') cb(ola);
}

executa(foo)


// executa(function() {
//     console.log('Anonima');
// });

// document.addEventListener('click', function clicou(e) {
//     console.log(e)
// })

/*
 Funções anonimas, funções nomeadas




*/
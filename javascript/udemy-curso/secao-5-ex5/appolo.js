function calcularMedia() {
    var args = arguments;
    // receber a lista de números
    // return args.length;
    var x = 0;
    var nota = 0;
    var media;

    while(args[x]) {
        nota += args[x];
        x++
    }

    media = nota / args.length;

    return media;

    // somar todos eles e dividir pelo total de argumentos passado 
}
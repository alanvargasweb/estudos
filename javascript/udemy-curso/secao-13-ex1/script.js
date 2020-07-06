(function () {
    'use strict'

    // variaveis globais
    var $trs = document.querySelectorAll('#grades tbody .aluno');
    var x = 0;


    while($trs[x]) {
        var linhaAluno = $trs[x]
        var tds = linhaAluno.querySelectorAll('td');
        var notas = recuperarNumerosDeColunas(tds);
        var media = calcularMedia.apply(this, notas);
        var somezero = notas.some(n => n === 0);
        var pass = approved(somezero, media);
        
        linhaAluno.querySelector('.gradesAverage').textContent = media;

        pass ? $trs[x].setAttribute('class','table-info') : $trs[x].setAttribute('class','table-danger');
        x++;
    }

    function recuperarNumerosDeColunas(tds){
        var x= 0;
        var arr = [];
        while( tds[x] ){
            if( !isNaN( tds[x].textContent ) && tds[x].textContent !== '' ){
                arr.push( parseFloat(tds[x].textContent ) );
            }
            x++;
        }
        return arr;
    }

    function approved(zero, media) {
        if(zero || media <= 7.5) {
            return false;
        } else {
            return true;
        }
    }
    
})()
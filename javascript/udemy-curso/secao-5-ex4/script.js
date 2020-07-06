(function(){

    var trs = document.querySelectorAll('table tbody tr');

    var x = 0;

    while (trs[x]) {
        var linhaAluno = trs[x];
        var media;
        var tds = linhaAluno.querySelectorAll('td');
        var notas = recuperarNumeroDeColunas(tds);
        x++;
  
        media = calcularMedia.apply(this, notas);
        console.log(notas)
        tds[0].innerText = media;
    }

    function recuperarNumeroDeColunas(tds) {
        
        var x = 0;
        var arr = [];

        while( tds[x]) {
            if(!isNaN(tds[x].textContent) && tds[x] !== '') {
                arr.push(parseInt(tds[x].textContent));
            }
            x++;
        }
        return arr;
    }

    function pegaNota(td) {
        return parseFloat(td.textContent);
    }

    

})()
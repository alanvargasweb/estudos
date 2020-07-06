(function(){

   var linha = document.querySelectorAll('p.line');
   
    for(i = 0; i < linha.length; i++) {
        linha[i].textContent = `Essa á a ${i + 1}° linha que o loope percore`;
    }
    

})()
(function(){
    

    function calculaIMC(peso, altura, calback) {

        var imc =  peso / (altura * altura);

        if(calback && typeof calback === 'function') {
            return calback(imc) + ' e seu IMC é de ' + imc.toFixed(2).replace('.',',');
        } else {
            return imc;
        }
    }

    function classificaIMC(imc) {

        if (imc < 10) {
            return 'muito abaixo do peso'
        } else if(imc >= 10 && imc <= 12.9) {
            return 'abaixo do peso'
        }else if(imc >= 13 && imc <= 15.9) {
            return 'um pouco abaixo do peso'
        }else if(imc >= 16 && imc <= 17) {
            return 'Saudavel mas magro'
        }else if(imc >= 18 && imc <= 24.9) {
            return 'Normal'
        }else if(imc >= 25 && imc <= 29.9) {
            return 'Saudavel mas gordo'
        }else if(imc >= 30 && imc <= 34.9) {
            return 'um pouco acima do peso'
        }else if(imc >= 35 && imc <= 39.9) {
            return 'acima do peso'
        }else if(imc > 39) {
            return 'Muito acima do peso'
        }


    }
    var alt = 1.80;
    var pes = 83;

    var recebeIMC = calculaIMC(pes, alt, classificaIMC);

    console.log(`O imc é igual a ${recebeIMC}`);
})()


var num = document.querySelector("#num");
var result = document.querySelector("#result");
var msg = ""

    function limpar() {
        msg = "";
        num.value = null;
        result.innerHTML = "";
        document.querySelectorAll('button')[0].disabled = true;
        document.querySelectorAll('button')[1].disabled = true;
    }

    function mostraNumero() {
        let valor = num.value;
        msg += `<p> Você digitou ${valor}</p>`;
        document.querySelectorAll('button')[0].disabled = false;
        result.innerHTML = msg;
    }

    function mostraPotenciacao() {
        document.querySelectorAll('button')[1].removeAttribute('disabled');

        let valor = num.value;
        let res = valor * valor
        msg += `<p>Sua potencia é de ${res}</p>`
       result.innerHTML = msg;
    }



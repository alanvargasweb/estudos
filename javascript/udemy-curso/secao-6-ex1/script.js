(function(){
    'use strict'

    var $txtUser = document.querySelector('#txtUser');
    var $txtPass = document.querySelector('#txtPass');
    var $txtMessage = document.querySelector('#txtMessage');
    var $submitBtn = document.querySelector('#submitBtn');
    var $alerta = document.querySelector('#alerta');


    $submitBtn.addEventListener('click', function(e){
        e.preventDefault()
        if($txtUser.value === '' || $txtPass.value === ''){
            console.log('Favor preencher todos od campos')
            $alerta.removeAttribute('class');
            $alerta.setAttribute('class','alert alert-primary')
        } else {
            console.log('enviar')
        }
    })    

    $txtMessage.addEventListener('input', input);
    // = 140;

    var $charlength = document.querySelector('#charlength');
    $charlength.textContent = $txtMessage.getAttribute('maxlength');
    var maxLenth = 140;

    function input(e) {
        console.log(this.value.length + 'up');
        let conta = maxLenth - this.value.length;
        $charlength.innerHTML = conta;
    }

})()



function contar() {

    let start_number = document.getElementById('start_number').value;
    let final_number = document.getElementById('final_number').value;
    let step = document.getElementById('step').value;
    let result = document.getElementById('result');
    result.innerHTML = '';

    if (start_number === '' || final_number === '' || step === '') {
        alert('Preencha todos os campos')
    } else { 
        if (start_number >= final_number) {
            alert('O número inicial não pode ser maior que o número final')
        } else {
            result.style.display = 'flex';
            let listnumbers = document.createElement('ul');
    
            for (i = start_number; i <= final_number; i++) {
    
                //console.log(`Esse é o número ${i}`);
                let btn = document.createElement("li");
                if(i < final_number){
                    btn.innerHTML = `<strong>${i}</strong> \u{1F603}`;
                } else {
                    btn.innerHTML = `<strong>${i}</strong> \u{1F613}`;
                }
                listnumbers.appendChild(btn).setAttribute('class', 'list-group-item');
            }
    
            result.appendChild(listnumbers).setAttribute('class', 'list-group list-group-horizontal wrap');
        }
    }



}
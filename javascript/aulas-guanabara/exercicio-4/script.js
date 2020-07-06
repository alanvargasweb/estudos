


function contar() {

    let start_number = document.getElementById('start_number').value;
    let result = document.getElementById('result');
    let i = 0;

    result.innerHTML = ''

    if (start_number == '') {
        alert('Favor digite um número');
    } else {
        result.style.display = 'flex';


        while (i <= 10) {
            let equation_result = i * start_number;
            let list = document.createElement('option');
            list.setAttribute('class', 'item');

            list.innerHTML = `${start_number} X ${i} = ${equation_result}`
            result.removeAttribute('disabled')
            result.append(list);
            i++;
            console.log(i)
        }

        
    }


}
function mostraAlgumaCoisa() {
    console.log(this);
}

const obj = {
    nome: 'Alan',
    profissao: 'Web'
}

mostraAlgumaCoisa = mostraAlgumaCoisa.bind(obj)
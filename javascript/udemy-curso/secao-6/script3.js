function Jogador(nome, sobrenome, time){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.time = time
}

var play1 = new Jogador('Thiago','shurman', 'Red Bats');
var play2 = new Jogador('anderson','Baraldi', 'Eagles');
var play3 = new Jogador('Lucas', "Enrik",'Vikings');


var jogadores = [play1, play2, play3];

var x = 0;

while(jogadores[x]) {
    console.log(`${jogadores[x].nome} ${jogadores[x].sobrenome} joga no ${jogadores[x].time}`);
    x++
}
var jogadores = ['Montanha','tecão','baraldi'];


// while (i < jogadores.length) {
//     console.log(jogadores[i]);
//     i++
// }

for (let i in jogadores) {
     console.log(`O jogador ${jogadores[i]} está em campo`);
  
}

let findplay = jogadores.indexOf('Montanha');

if( findplay === -1) {
    console.log('Jogador não encontrado')
} else {
    console.log(`'O Jogador ${jogadores[findplay]} for encontrado'`)
}
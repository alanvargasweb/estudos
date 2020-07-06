var nome = "Alan";

function mostraNome() {


    let nome = "zé";
    console.log(testeHoisting())
    function testeHoisting() {
        return 'funcionou'
    }
}

mostraNome();

/*
 Var escopo de função
let const são escopo de blocos



funções literisiss sempre são içadas para o topo
*/
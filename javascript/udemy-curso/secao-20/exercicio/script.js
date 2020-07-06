const alunos = [
    {"_id": 1, "nome": 'Jake armstrong'},
    {"_id": 2, "nome": 'Paul Wally'},
    {"_id": 3, "nome": 'Kelne Rogers'},
    {"_id": 4, "nome": 'Mike Rogers'},
    {"_id": 5, "nome": 'Karl Jonson'},
    {"_id": 6, "nome": 'Taba Luz'},
    {"_id": 7, "nome": 'Joelson'},
    {"_id": 8, "nome": 'Ricardo Salgo'},
    {"_id": 9, "nome": 'Celso lomas'},
    {"_id": 10, "nome": 'Renan truller'},
    {"_id": 11, "nome": 'Ademir'},
    {"_id": 12, "nome": 'Andersão'},
    {"_id": 13, "nome": 'Erenildo'},
    {"_id": 14, "nome": 'Serginho vicenzotti'},
    {"_id": 15, "nome": 'Paulo sergio'},
    {"_id": 16, "nome": 'Edu Carreira'},
];

const faltas = [
    {"_id_aluno": 1, "faltas": 3},
    {"_id_aluno": 2, "faltas": 4},
    {"_id_aluno": 3, "faltas": 0},
    {"_id_aluno": 4, "faltas": 0},
    {"_id_aluno": 5, "faltas": 7},
    {"_id_aluno": 6, "faltas": 1},
    {"_id_aluno": 7, "faltas": 17},
    {"_id_aluno": 8, "faltas": 1},
    {"_id_aluno": 9, "faltas": 1},
    {"_id_aluno": 10, "faltas": 0},
    {"_id_aluno": 11, "faltas": 7},
    {"_id_aluno": 12, "faltas": 1},
    {"_id_aluno": 13, "faltas": 134},
    {"_id_aluno": 14, "faltas": 5},
    {"_id_aluno": 15, "faltas": 12},
    {"_id_aluno": 16, "faltas": 0},
];

let = reprovadosPorFaltas = faltas
    .filter( (falta) => falta.faltas < 1 )
    .map( falta => falta._id_aluno )
    .map( idAlunos => {
        return alunos.filter( aluno => aluno._id === idAlunos );
    });

console.table(reprovadosPorFaltas)

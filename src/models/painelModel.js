var database = require("../database/config");

function buscar() {

    var instrucaoSql = `
select g.nome as genero,
		count(l.titulo) as qtdLivroGenero
 from genero as g
 join livro as l on l.fkgenero = g.id
 group by g.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
}
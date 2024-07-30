const prompt = require("prompt-sync")();

const produtos = [];

const atualizaoValida = indice => {
    if(produtos.length == 1 && indice == 0) {
    return false
    }
    return true
}
const validarIndice = (indice) => indice >= 0 && indice < produtos.length;

const modelo = (indice = -1) => {
    const nome = prompt("Nome do produto: ");
    const preco = prompt("Qual o preço do produto?: ");
    

    if (
    nome != "" &&
    preco >= 0
    ) {
    return {
        nome,
        preco,
    };
    } else {
    console.log("Dados inválidos");
    }
};

const criar = () => {
    const produto = modelo();

    if (produto != undefined) {
    produtos.push(produto);
    console.log("Produto cadastrado com sucesso");
    }
};

const listar = () => {
    if (produtos.length == 0) {
    console.log("Nenhum produto encontrado");
    return false;
    } else {
    produtos.forEach((produto, indice) => {
        console.log(`
                ${indice + 1}. 
                Nome: ${produto.nome}
                Preço: ${produto.preco}
                `);
    });

    return true;
    }
};

const atualizar = () => {
    if (!listar()) {
    return;
    }

    const indice = prompt("Qual o indice que deseja atualizar? ") - 1;

    const produto = modelo(indice);

    if (produto != undefined && validarIndice(indice)) {
    produtos[indice] = produto;

    console.log("Produto atualizado com sucesso");
    } else {
    console.log("Falha na atualização");
    }
};

const remover = () => {
    if (!listar()) {
    return;
    }

    const indice = prompt("Qual indice você deseja remover? ") - 1;

    if (validarIndice(indice)) {
    produtos.splice(indice, 1);
    console.log("Produto removido com sucesso");
    } else {
    console.log("Falha na remoção");
    }
};

module.exports = {
    criar,
    atualizar,
    listar,
    remover
}
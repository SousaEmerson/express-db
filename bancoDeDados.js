const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getproduto(id) {
    returnprodutos[id] || {}
}

function getprodutos() {
    return Object.values(produtos)
}
module.exports = {
    salvarProduto,
    getproduto,
    getprodutos
}
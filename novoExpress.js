const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getprodutos())
})


app.get('/produtos/:id',(request, response, next) => {
    response.send(bancoDeDados.getproduto(request.params.id))
})

app.post('/produtos',(request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        name: request.body.name,
        price: request.body.price
    })
    response.send(produto)

})


app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}.`)
})
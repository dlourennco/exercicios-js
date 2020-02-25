const criarProduto = function(nome, valor, desconto) {
    return {
        nome: nome,
        valor: valor,
        desconto: desconto
    }
}

console.log(criarProduto("creme", 6, 1))
console.log(criarProduto)
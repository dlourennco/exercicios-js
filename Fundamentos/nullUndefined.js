let valor //não inicializada
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString()) ERRO
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar setar undefined, deixar que a linguagem faça, ao invés disso colocar 0
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco, diferente de 0
console.log(!!produto.preco)
console.log(produto)

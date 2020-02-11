/*console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)
*/
function Obj(nome, idade, cidade) {
    this.nome = nome
    this.idade = idade
    this.cidade = cidade
}

const obj2 = new Obj('João', 16, 'São Paulo')
const obj3 = new Obj('Rogerinho', 12, 'Rio de Janeiro')
console.log(obj2)
console.log(obj3)
console.log(typeof obj2)
console.log(typeof obj3)

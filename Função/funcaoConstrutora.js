function Carro(velMax = 200, delta = 5) {
  //atributo privado(que pertence somente a esta função)
  let velAtual = 0

  //método público
  this.acelerar = function() {
    if (velAtual + delta <= velMax) {
      velAtual += delta
    } else {
      velAtual = velMax
    }
  }

  //método público
  this.getVelAtual = function() {
    return velAtual
  }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelAtual())
console.log(typeof ferrari)
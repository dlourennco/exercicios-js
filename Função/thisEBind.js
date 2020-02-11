const pessoa = {
  saudação: 'Bom dia',
  falar() {
    console.log(this.saudação)
  }
}

pessoa.falar()

const falar = pessoa.falar
falar() //retorna undefined, o this mudou

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
sdasd

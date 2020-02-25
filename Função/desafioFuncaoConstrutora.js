function Pessoa(nome) {

    this.nome = nome

    this.criarPessoa = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Joao')

p1.criarPessoa()
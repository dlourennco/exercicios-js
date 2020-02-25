function getRandomNumber(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getRandomNumber(-1, 50)
    console.log(`A posição escolhida foi ${opcao}`)    
} while (opcao != -1)

console.log('Fim')
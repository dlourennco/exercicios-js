function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min: 30, max: 35}))

const obj = {min: 50, max: 100}
console.log(rand(obj))
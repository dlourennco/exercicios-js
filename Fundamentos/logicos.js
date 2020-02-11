function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //uma das condições devem ser satisfeitas
    const compraTV50 = trabalho1 && trabalho2 //as duas condições devem ser satisfeitas
    const compraTV32 = (trabalho1 != trabalho2)
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, compraTV50, compraTV32, manterSaudavel } //o JS vai criar os pares key: value automaticamente
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
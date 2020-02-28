const triangulo = function(lado1, lado2, lado3) {
    if(lado1 === lado2 && lado1 === lado3) {
        console.log("Este é um triângulo Equilátero!")
    } else if (lado1 === lado2 || lado1 === 3) {
        console.log("Este é um triângulo Isósceles!")
    } else {
        console.log("Este é um triângulo Escaleno!")
    }
}

triangulo(2,2,2)//equilatero
triangulo(2,2,4) //isosceles
triangulo(2,3,4) //escaleno
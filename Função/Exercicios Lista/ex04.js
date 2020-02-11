function restoDivisao(dividendo, divisor) {
  
  const resto = dividendo %= divisor
  
  return resto
}

console.log(restoDivisao(2, 5))
console.log(restoDivisao(10, 7))
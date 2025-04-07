let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let entrada = "MCMXCIV"
let arrayEntrada = entrada.split("")
let sum = 0
for (let i = 0; i < arrayEntrada.length; i++) {
    if (values[arrayEntrada[i]] < values[arrayEntrada[i + 1]]) {
        sum -= values[arrayEntrada[i]]
    }
    else {
        sum += values[arrayEntrada[i]]
    }
}
console.log(sum)

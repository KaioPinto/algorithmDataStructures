let arrayOrdenado = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
let valor = 16

// tenho que descobrir o meio, e como eu faço o calculo do meio, dividir o length por 2 15 dps 2 dnv 

let inicio = 0
let final = arrayOrdenado.length - 1
let meio = 0




while (inicio <= final) {

    meio = Math.floor((final + inicio) / 2)

    if (valor < arrayOrdenado[meio]) {
        final = meio - 1

    } else if (valor > arrayOrdenado[meio]) {
        inicio = meio + 1


    } else {
        console.log(arrayOrdenado[meio])
        return arrayOrdenado[meio]
    }


}
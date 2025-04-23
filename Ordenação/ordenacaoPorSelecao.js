function buscarMenor(elementos) {

    let menorElemento = elementos[0]
    let menorIndice = 0
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i] < menorElemento) {
            menorElemento = elementos[i]
            menorIndice = i
        }
    }

    return menorIndice


}


//Usar a função acima para fazer a ordenação por seleção

function ordenaçãoPorSelecao(arr) {
    let novoArr = []

    for (let i of arr) {
        let menorIndice = buscarMenor(arr)
        let menorElemento = arr.splice(menorIndice, 1)[0]
        novoArr.push(menorElemento)

    }
    novoArr
}
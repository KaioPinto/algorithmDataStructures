let board =
    [[".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]]



let boardg = board


let linhas = {}
let colunas = {}
let quadrante = {}




for (let lin = 0; lin < boardg.length; lin++) {
    for (let col = 0; col < boardg[lin].length; col++) {
        let correntValor = boardg[lin][col]
        let indexQuadrante = `${Math.floor(lin / 3)}-${Math.floor(col / 3)}`;
        quadrante[indexQuadrante] = quadrante[indexQuadrante] || new Set()
        if (boardg[lin][col] != ".") {


            linhas[lin] = linhas[lin] || new Set()
            colunas[col] = colunas[col] || new Set()
            let chave = `${Math.floor(lin / 3)}, ${Math.floor(col / 3)}`
            quadrante[chave] = quadrante[chave] || new Set()






            if (linhas[lin].has(correntValor) ||
                colunas[col].has(correntValor) ||
                quadrante[chave].has(correntValor)) {
                console.log("XD")
                return false

            }

            linhas[lin].add(correntValor)
            colunas[col].add(correntValor)
            quadrante[chave].add(correntValor)





        }
    }
}

return true







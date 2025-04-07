let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "E", "S"],
    ["A", "D", "E", "E"]
];

let word = "ABCESEEEFS";

if (board.length * board[0].length < word.length) {
    console.log("false");
    return false;
}

for (let lin = 0; lin < board.length; lin++) {
    for (let col = 0; col < board[lin].length; col++) {
        if (board[lin][col] === word[0]) {
            if (encontraCaracte(lin, col, board, word, 0, new Set())) {
                console.log("true");
                return true;
            }
        }
    }
}

console.log("false");
return false;

function encontraCaracte(x, y, board, word, sufix, visited) {
    if (sufix === word.length) return true;

    let key = `${x}-${y}`;

    if (
        x < 0 || x >= board.length ||
        y < 0 || y >= board[0].length ||  // Corrigido aqui
        board[x][y] !== word[sufix] ||
        visited.has(key)
    ) {
        return false;
    }

    visited.add(key);

    if (encontraCaracte(x, y + 1, board, word, sufix + 1, visited)) return true; // Direita
    if (encontraCaracte(x, y - 1, board, word, sufix + 1, visited)) return true; // Esquerda
    if (encontraCaracte(x + 1, y, board, word, sufix + 1, visited)) return true; // Baixo
    if (encontraCaracte(x - 1, y, board, word, sufix + 1, visited)) return true; // Cima

    visited.delete(key);

    return false;
}

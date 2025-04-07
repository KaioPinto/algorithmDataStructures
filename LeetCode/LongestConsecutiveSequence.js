let target = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

let newTarget = new Set(target);
let maiorContador = 0;

for (let num of newTarget) {
    if (!newTarget.has(num - 1)) {
        let contador = 1
        let proximo = num + 1
        while (newTarget.has(proximo)) {
            contador++
            proximo++
        }
        maiorContador = Math.max(maiorContador, contador);
    }
}

return maiorContador
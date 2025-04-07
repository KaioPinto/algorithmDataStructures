let vaium = 0; // Inicializa o carry (vai um)
let dummy = new ListNode(0); // Nó fictício
let primerio = dummy; // Ponteiro para a lista resultante

while (l1 || l2 || vaium > 0) {
    // Pega os valores de l1 e l2, ou 0 se a lista estiver vazia
    let valor1 = l1 ? l1.val : 0;
    let valor2 = l2 ? l2.val : 0;

    // Soma os valores e o carry
    let somar = valor1 + valor2 + vaium;

    // Atualiza o carry
    vaium = Math.floor(somar / 10);

    // Coloca o valor da unidade no nó atual
    primerio.next = new ListNode(somar % 10);
    primerio = primerio.next; // Avança para o próximo nó

    // Avança nas listas l1 e l2, se possível
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
}

// Retorna a lista começando após o nó fictício
return dummy.next;


//NAO CONSEGUI ACHEI ESTRANHO ESSE NGC DO NEW NODE
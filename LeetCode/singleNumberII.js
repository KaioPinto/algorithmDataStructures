let nums = [2, 2, 3, 2]

let hashmap = {}

for (let i = 0; i < nums.length; i++) {
    let numero = nums[i]
    hashmap[numero] = hashmap[numero] + 1 || 1

}




let matriz = []


for (let i = 0; i < nums.length + 1; i++) {
    matriz[i] = []
}



for (let [chave, valor] of Object.entries(hashmap)) {
    matriz[valor].push(parseInt(chave))

}

for(let i of matriz){


    if(i != ""){
        return i
    }
}
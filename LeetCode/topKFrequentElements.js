let nums = [2, 4, 3, 3, 1, 2]
let k = 2

let dt = {}
for (let num of nums) {
    if (!dt[num]) {
        dt[num] = 1
    } else { dt[num] = dt[num] + 1 }

}


let matriz = []
for (let i = 0; i < nums.length + 1; i++) {
    matriz[i] = []
}

for (let num in dt) {
    let freq = dt[num]
    matriz[freq].push(parseInt(num))

}
let result = []

for (let freq = nums.length; freq > 0; freq--) {
    for (let num of matriz[freq]) {
        result.push(num);
        if (result.length == k) {
            return result
        }

    }

}

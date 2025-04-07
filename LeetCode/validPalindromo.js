// let s = "A man, a plan, a canal: Panama"
// let aux = []
// let cont = 0
// while (cont < s.length) {
//     if (/^[a-z0-9]$/i.test(s[cont])) {
//         aux.push(s[cont])

//     }
//     cont++


// }
// let auxRevers = [...aux].reverse()
// console.log(auxRevers)
// console.log(aux)
// for (let i = 0; i < aux.length; i++) {

//     if (aux[i].toLowerCase() != auxRevers[i].toLowerCase()) {
//         console.log('falso')
//         return false
//     }

// }

// return true






let s = "A man, a plan, a canal: Panama"

s = s.toLowerCase().replace(/[^a-z0-9]/g, "")

let right = s.length - 1
let left = 0


while (left < right) {
   
    if (s[right] != s[left]) {
        return false
    }
    right--
    left++
}

return true

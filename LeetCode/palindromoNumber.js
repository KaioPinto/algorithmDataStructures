let x = 10
let y = String(x).split("")
let newString = ''
for (let i = y.length - 1; i >= 0; i--) {
    newString += y[i]
}
if (newString == String(x)) {
    return true

} else {
    return false
}


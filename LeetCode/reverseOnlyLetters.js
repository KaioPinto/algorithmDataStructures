let s = "ab-cd".split("")
let j = s.length - 1
let i = 0


function isLetter(char) {
    return /^[a-zA-Z]$/.test(char)
}


while (i < j) {
    if (isLetter(s[i]) && isLetter(s[j])) {
        let temp = s[j]
        s[j] = s[i]
        s[i] = temp
        j--
        i++
    } else if (!isLetter(s[i]) && !isLetter(s[j])) {
        j--
        i++
    } else if (isLetter(s[i]) && !isLetter(s[j])) {
        j--
    } else if (isLetter(s[j]) && !isLetter(s[i])) {
        i++
    }

}

console.log(s.join(""))

return s.join("")
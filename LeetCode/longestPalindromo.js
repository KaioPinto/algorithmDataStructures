let charFrequency = {}
let oddFrequency = 0
for (let char of s) {
    charFrequency[char] = charFrequency[char] + 1 || 1

    if (charFrequency[char] % 2 == 1) {
        oddFrequency++

    } else {
        oddFrequency--
    }



}
if (oddFrequency > 1) {
    return s.length - oddFrequency + 1
}
return s.length
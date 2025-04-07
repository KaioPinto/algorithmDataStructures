///conceito de janela deslizante


let s = "pwwkew"
let arraySubStrings = s.split("")
let left = 0
let seen = new Set()
let res = 0

for (let rigth = 0; rigth < arraySubStrings.length; rigth++) {

    while (seen.has(arraySubStrings[rigth])) {
        seen.delete(arraySubStrings[left])
        left++

    }
    seen.add(arraySubStrings[rigth])
    res = Math.max(res, rigth - left + 1)

}
return res
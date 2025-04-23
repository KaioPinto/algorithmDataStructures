///conceito de janela deslizante
let res = ""
let resLen = 0


for (let i = 0; i < s.length; i++) {
    let left = i, right = i;

    while (left >= 0 && right <= s.length && s[left] == s[right]) {

        if (resLen < (r - l + 1)) {
            res = s.slice(l, r + 1);
            resLen = r - l + 1

        }
        l++
        r++




    }
    left = i, right = i + 1;

    while (left >= 0 && right <= s.length && s[left] == s[right]) {

        if (resLen < (r - l + 1)) {
            res = s.slice(l, r + 1);
            resLen = r - l + 1

        }
        l++
        r++
    }
}
return res
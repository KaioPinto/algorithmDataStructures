let strs = ["dog", "flight", "flow"]


if (!strs.length) {
    return ""
}
let prefix = strs[0]

for (let i = 1; i < strs.length; i++) {
    while (strs[1].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1)
        if (prefix == "") {
            return ""
        }
    }

}
console.log(prefix)
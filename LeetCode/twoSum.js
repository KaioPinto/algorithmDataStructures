let array = [2, 5, 5, 11]
let target = 10

let hasher = {}

array.forEach( (element, idx) => {
    if(hasher[element]){
        console.log(hasher[element], idx)
        return [hasher[element], idx]
    }
    hasher[element] = idx

});
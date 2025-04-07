let s = "babad"

for (let char of s) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
    if (charFrequency[char] % 2 === 1)
        oddFrequencyCount++;
    else
        oddFrequencyCount--;
}
if (oddFrequencyCount > 1) {
    return s.length - oddFrequencyCount + 1;
}

return s.length;

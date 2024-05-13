function getAverage(scores) {
    let sum = 0
    for (let i = 0; i < scores.length; i++){
        sum += scores[i]
    }
    return sum / scores.length
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // 85.4
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100])); // 92.4
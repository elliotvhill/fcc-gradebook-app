const getAverage = (scores) => {
    let sum = 0
    for (let i = 0; i < scores.length; i++){
        sum += scores[i]
    }
    return sum / scores.length
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // 85.4
// console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100])); // 92.4

const getGrade = (score) => {
    if (score === 100) { return "A++" }
    else if (score >= 90 && score <= 99) {return "A"}
    else if (score >= 80 && score <= 89) {return "B"}
    else if (score >= 70 && score <= 79) {return "C"}
    else if (score >= 60 && score <= 69) {return "D"}
    else {return "F"}
}

// console.log(getGrade(96)); // A
// console.log(getGrade(82)); // B
// console.log(getGrade(56)); // F

const hasPassingGrade = (score) => {
    let grade = getGrade(score)
    if (grade !== "F"){return true}
    else {return false}
}

const studentMsg = (totalScores, studentScore) => {
    let average = getAverage(totalScores)
    let grade = getGrade(studentScore)
    if (grade !== "F") {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.
        `
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); // "Class average: 71.7. Your grade: F. You failed the course."
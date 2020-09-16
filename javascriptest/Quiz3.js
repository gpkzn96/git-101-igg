function getGrade(percent) {
    if (percent >= 90) {
        return 'A';
    }
    if (percent >= 80) {
        return 'B';
    }
    if (percent >= 70) {
        return 'C';
    }
    if (percent >= 60) {
        return 'D';
    }
    return 'F';
}

console.log(getGrade(90)); // A
console.log(getGrade(81)); // B
console.log(getGrade(72)); // C
console.log(getGrade(63)); // D
console.log(getGrade(54)); // F
for (let i = 1; i <= 20; i += 1) {
    console.log(i)
}
for (let i = 1; i <= 20; i++) {
    console.log(i % 2 === 0 ? i : "")
}
let x1 = [-1, 2, 3, 4, 5, 6, 7, 0].map(el => el * 2)
console.log(x1)
let x2 = [-1, 2, 3, 4, 5, 6, 7, 0].filter(el => el % 2 === 0)
console.log(x2)
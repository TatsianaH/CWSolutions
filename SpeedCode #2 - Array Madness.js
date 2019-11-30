// https://www.codewars.com/kata/speedcode-number-2-array-madness/train/javascript

function arrayMadness(a, b) {
    return a.reduce((acc, curr) => acc + curr ** 2, 1) > b.reduce((acc, curr) => acc + curr ** 3, 1)
}

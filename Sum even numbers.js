// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

function sumEvenNumbers(inp) {
    return inp.filter(el => el % 2 === 0).reduce((a, b) => a + b);
}

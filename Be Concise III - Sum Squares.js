// https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7/train/javascript

function sumSquares(arr) {
    return arr.map(el => el ** 2).reduce((a, b) => a + b, 0);
}
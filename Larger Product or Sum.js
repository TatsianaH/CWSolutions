// https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02/train/javascript

function sumOrProduct(arr, n) {
    arr.sort((a, b) => a - b);
    let sum = arr.slice(-n).reduce((a,b) => a + b, 0);
    let product = arr.slice(0, n).reduce((a, b) => a * b, 1);
    return sum > product ? 'sum' : sum < product ? 'product' : 'same';
}
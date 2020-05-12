// https://www.codewars.com/kata/5276c18121e20900c0000235/train/javascript

function findNumber(arr) {
    return ((1 + (arr.length + 1)) * (arr.length + 1)) / 2 - arr.reduce((a, b) => a + b, 0);
}
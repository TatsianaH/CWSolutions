// https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript

function modifiedSum(a, n) {
    let res1 = a.reduce((acc, curr) => acc + Math.pow(curr, n), 0);
    let res2 = a.reduce((a, b) => a + b, 0);
    return res1 - res2;
}
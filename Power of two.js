// https://www.codewars.com/kata/power-of-two/train/javascript

function isPowerOfTwo(n){
    return Number.isInteger(Math.log10(n)/Math.log10(2));
}

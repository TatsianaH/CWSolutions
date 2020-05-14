// https://www.codewars.com/kata/debug-sum-of-digits-of-a-number/train/javascript

function getSumOfDigits(int) {
    return int.toString().split('').reduce((a, b) => a + +b, 0);
}
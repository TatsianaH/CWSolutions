// https://www.codewars.com/kata/55afed09237df73343000042/train/javascript

function isLucky(n) {
    if(n === 0) return true;
    n = n.toString().split('').reduce((a, b) => a + b, 0);
    return n % 9 === 0 ? true : false;
}
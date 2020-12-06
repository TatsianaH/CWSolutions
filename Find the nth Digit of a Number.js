// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

const findDigit = function(num, nth){
    if(num < 0) num = -num;
    if(nth <= 0) return -1;
    num = num.toString().split('').reverse();
    return num[nth - 1] !== undefined ? +num[nth - 1] : 0;
}
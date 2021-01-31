// https://www.codewars.com/kata/5f7b1a82be51af00105c82bd/train/javascript

function divBy9(ns){
    ns = ns.toString().split('').reduce((a, b) => +a + +b, 0);
    return ns % 9 === 0;
}
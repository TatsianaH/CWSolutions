// https://www.codewars.com/kata/599c20626bd8795ce900001d/train/javascript

function summy(str){
    return str.split(' ').map(el => +el).reduce((a, b) => a + b, 0);
}
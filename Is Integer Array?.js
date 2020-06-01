// https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

function isIntArray(arr) {
    if(!arr) return false;
    return arr.every(el => !Number.isNaN(el) && Number.isInteger(el));
}
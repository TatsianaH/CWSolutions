// https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript

function noRepeat(str) {
    let arr = str.split('');
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))[0];
}
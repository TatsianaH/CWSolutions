// https://www.codewars.com/kata/54fdadc8762e2e51e400032c/train/javascript

function myParseInt(str) {
    if(str.trim().match(/[^0-9]/g)) return 'NaN';
    else return Number.parseInt(str, 10);
}
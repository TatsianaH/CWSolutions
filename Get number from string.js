// https://www.codewars.com/kata/get-number-from-string/train/javascript

function getNumberFromString(s) {
    return +s.replace(/[^0-9]/gi, '');
}
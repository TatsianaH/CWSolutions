// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

function evenChars(str) {
    if(str.length < 2 || str.length > 100) return 'invalid string';
    return str.split('').filter((el, i) => i % 2 === 1);
}
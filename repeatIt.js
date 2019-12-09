// https://www.codewars.com/kata/repeatit/train/javascript

var repeatIt = function(str, n) {
    if(typeof str !== 'string') return 'Not a string';
    return str.repeat(n);
}
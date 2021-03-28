// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

const palindromeChainLength = function(n) {
    let count = 0;
    let num = String(n);
    let rev = num.split('').reverse().join('');
    while(num !== rev){
        num = String(+num + +rev);
        rev = num.split('').reverse().join('');
        count++;
    }
    return count;
};
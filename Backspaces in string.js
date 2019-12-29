// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
    let str = '';
    let count = 0;
    for(let i = s.length - 1; i>=0 ; i--){
        if(s[i] !== '#' && count === 0) str = s[i] + str;
        if(s[i] === '#') count++;
        if(s[i] !== '#' && count > 0) count--;
    }
    return str;
};
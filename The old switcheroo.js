// https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript

function vowel2index(str) {
    let s = '';
    for(let i = 0; i < str.length; i++){
        if('aeiouAEOUI'.includes(str[i])) s += i + 1;
        else s += str[i];
    }
    return s;
}

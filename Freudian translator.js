// https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript

function toFreud(str) {
    if(str.length === 0) return str;
    str = str.split(' ').map(el => el = 'sex').join(' ');
    return str;
}
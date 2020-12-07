// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

function vertMirror(str) {
    str = str.split('\n').map(el => el.split('').reverse().join('')).join('\n');
    return str;
}
function horMirror(str) {
    str = str.split('\n').reverse().join('\n');
    return str;
}
function oper(fct, s) {
    return fct(s);
}
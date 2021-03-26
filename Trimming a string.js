// https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript

function trim(str, size) {
    const l = str.length;
    if(l <= size) return str;
    else if(l <= 3) return str.slice(0, size) + '...';
    else return str.slice(0, size - 3) + '...';
}
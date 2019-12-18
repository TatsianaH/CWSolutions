// https://www.codewars.com/kata/array-dot-diff/train/javascript

function array_diff(a, b) {
    for(let i = 0; i < b.length; i++){
        a = a.filter(el => el !== b[i]);
    }
    return a;
}

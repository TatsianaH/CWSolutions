// https://www.codewars.com/kata/array-dot-diff/train/javascript

function array_diff(a, b) {
    for(let i = 0; i < b.length; i++){
        a = a.filter(el => el !== b[i]);
    }
    return a;
}

// 2 case

function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
}
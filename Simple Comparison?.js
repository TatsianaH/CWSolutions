// https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript

function add(a, b){
    if(typeof a === typeof b){
        return a === b;
    }
    if(typeof a === 'string' && typeof b === 'number') {
        a = +a;
    } else {
        a = '' + a;
    }
    return a === b;
}

// 2 case
function add(a, b){
    return a == b;
}
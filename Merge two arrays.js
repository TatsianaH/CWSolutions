// https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript

function mergeArrays(a, b) {
    let arr = [];
    for(let i = 0; i < a.length || i < b.length; i++){
        if(a[i]) arr.push(a[i]);
        if(b[i]) arr.push(b[i]);
    }
    return arr;
}
// https://www.codewars.com/kata/training-js-number-4-basic-data-types-array/train/javascript

function getLength(arr){
    return arr.length;
}
function getFirst(arr){
    return arr[0];
}
function getLast(arr){
    return arr[arr.length - 1];
}
function pushElement(arr){
    const el = 1;
    arr.push(el);
    return arr;
}
function popElement(arr){
    arr.pop();
    return arr;
}
// https://www.codewars.com/kata/54598e89cbae2ac001001135/train/javascript

function any(arr, fun){
    if(arr.length === 0) return false;
    return arr.some(fun);
}
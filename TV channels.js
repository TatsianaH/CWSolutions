// https://www.codewars.com/kata/5836dce6966f8d1d43000007/train/javascript

function redarr(arr) {
    arr = arr.sort().filter((el, i) => arr.indexOf(el) === i);
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        obj[i] = arr[i];
    }
    return obj;
}

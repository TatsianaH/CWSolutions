// https://www.codewars.com/kata/5b83c1c44a6acac33400009a/train/javascript

function solve(str,k){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str.slice(i, i + (str.length - k)));
    }
    return Math.max(...arr);
}

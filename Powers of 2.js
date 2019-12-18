// https://www.codewars.com/kata/powers-of-2/train/javascript

function powersOfTwo(n){
    const arr = [];
    for(let i = 0; i <= n; i++){
        arr.push(2 ** i);
    }
    return arr;
}
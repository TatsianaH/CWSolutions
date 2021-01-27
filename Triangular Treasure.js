// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript

function triangular(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        arr.push('*'.repeat(i));
    }
    return arr.join('').length;
}

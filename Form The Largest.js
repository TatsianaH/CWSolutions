// https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e/train/javascript

function maxNumber(n){
    const arr = String(n).split('').map(el => Number(el)).sort((a, b) => b - a);
    return +arr.join('');
}
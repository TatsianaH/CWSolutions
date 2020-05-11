// https://www.codewars.com/kata/sort-out-the-men-from-boys-1/train/javascript

function menFromBoys(arr){
    arr = arr.filter((el, i) => i === arr.lastIndexOf(el));
    let even = arr.filter(el => Math.abs(el) % 2 === 0).sort((a, b) => a - b);
    let odd = arr.filter(el =>  Math.abs(el) % 2 === 1).sort((a, b) => b - a);
    return even.concat(odd);
}

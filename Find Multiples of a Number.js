// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(int, l) {
    let arr = [];
    let max = Math.trunc(l / int);
    for(let i = 1; i <= max; i++){
        arr.push(int * i);
    }
    return arr;
}
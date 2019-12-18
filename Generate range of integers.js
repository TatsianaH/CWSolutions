// https://www.codewars.com/kata/generate-range-of-integers/train/javascript

function generateRange(min, max, step){
    let arr = [];
    for(let i = min; i <= max; i += step){
        arr.push(i);
    }
    return arr;
}
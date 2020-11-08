// https://www.codewars.com/kata/5d0365accfd09600130a00c9/train/javascript

function solve(arr) {
    let min = 1, max = 1;
    for (let el of arr) {
        let curr = [];
        for (let y of el) curr.push(y * min), curr.push(y * max);
        min = Math.min(...curr);
        max = Math.max(...curr);
    }
    return max;
}
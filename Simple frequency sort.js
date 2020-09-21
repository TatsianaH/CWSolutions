// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

function solve(arr){
    let obj = {};
    for(let num of arr){
        if(obj[num]) obj[num] += 1;
        else obj[num] = 1;
    }
    arr.sort((a, b) => obj[b] - obj[a] || a - b);
    return arr;
}

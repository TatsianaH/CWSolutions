// https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript

function pairs(arr){
    let count = 0;
    for(let i = 0; i < arr.length - 1; i += 2){
        if(Math.abs(arr[i] - arr[i + 1]) === 1) count++;
    }
    return count;
};
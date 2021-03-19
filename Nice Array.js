// https://www.codewars.com/kata/59b844528bcb7735560000a0/train/javascript

function isNice(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr.includes(arr[i] + 1)) count++;
        else if(arr.includes(arr[i] - 1)) count++;
    }
    return count === arr.length && arr.length !== 0;
}
// https://www.codewars.com/kata/5b5e0ef007a26632c400002a/train/javascript

function elementsSum(arr,d){
    let sum = 0;
    if(d === undefined) d = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i][arr.length - i - 1] === undefined) sum += d;
        else sum += arr[i][arr.length - i - 1];
    }
    return sum;
}
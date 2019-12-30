// https://www.codewars.com/kata/simple-fun-number-37-house-numbers-sum/train/javascript

function houseNumbersSum(arr) {
    let res = 0;
    let i = 0;
    while(arr[i] !== 0){
        res += arr[i];
        i++;
    }
    return res;
}
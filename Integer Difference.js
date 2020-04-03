// https://www.codewars.com/kata/57741d8f10a0a66915000001/train/javascript

const intDiff = (arr, n) => {
    let res = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(Math.abs(arr[i] - arr[j]) === n) res++;
        }
    }
    return res;
}
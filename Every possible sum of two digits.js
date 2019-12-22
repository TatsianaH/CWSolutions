// https://www.codewars.com/kata/every-possible-sum-of-two-digits/train/javascript

function digits(num){
    num = num.toString().split('').map(el => +el);
    let arr = [];
    for(let i = 0; i < num.length - 1; i++){
        for(let j = i + 1; j < num.length; j++){
            arr.push(num[i] + num[j]);
        }
    }
    return arr;
}
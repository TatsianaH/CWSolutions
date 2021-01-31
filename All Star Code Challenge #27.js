// https://www.codewars.com/kata/5866e26f2e8d9cdbcd0003d7/train/javascript

function factorial(x){
    let f = 1;
    for(let i = x; i >= 1; i--){
        f *= i;
    }
    return f;
}
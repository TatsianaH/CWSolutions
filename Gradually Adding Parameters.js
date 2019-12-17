// https://www.codewars.com/kata/gradually-adding-parameters/train/javascript

function add(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i] * (i + 1);
    }
    return sum;
}
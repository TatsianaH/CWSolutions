// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

function halvingSum(n) {
    let sum = n;
    let i = 2;
    while(n / i >= 1){
        sum += Math.floor(n / i);
        i *= 2;
    }
    return sum;
}


// https://www.codewars.com/kata/56b58d11e3a3a7cade000792/train/javascript

function sexy_prime(x, y){
    if(x > 1 && y > 1){
        for(let i = 2; i <= 9; i++){
            if(x % i === 0 && x !== i || y % i === 0 && y !== i) return false;
        }
        return Math.abs(x - y) === 6;
    }
    return false;
}
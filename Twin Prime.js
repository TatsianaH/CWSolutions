// https://www.codewars.com/kata/59b7ae14bf10a402d40000f3/train/javascript

function isPrime(n){
    let count = 0;
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) count++;
    }
    return count === 0;
}

function isTwinPrime(n){
    if(isPrime(n) === false) return false;
    let num1 = isPrime(n - 2);
    let num2 = isPrime(n + 2);
    return num1 === true || num2 === true ? true : false;
}
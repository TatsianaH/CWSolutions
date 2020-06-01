// https://www.codewars.com/kata/58e230e5e24dde0996000070/train/javascript

function isPrime(num){
    if(num < 2) return false;
    let count = 0;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) count++;
    }
    return count === 0;
}

const nextPrime = (n) => isPrime(n + 1) ? n + 1 : nextPrime(n + 1);
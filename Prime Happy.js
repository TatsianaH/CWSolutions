// https://www.codewars.com/kata/59b2ae6b1b5ca3ca240000c1/train/javascript

function isPrime(num){
    if(num < 2) return false;
    let count = 0;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) count++;
    }
    return count === 0;
}

function getPrimes(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        if(isPrime(i)) arr.push(i);
    }
    return arr;
}

function isPrimeHappy(n){
    const primesList = getPrimes(n);
    if(primesList.length > 0){
        const sum = primesList.reduce((a, b) => a + b, 0);
        if(sum % n === 0) return true;
        else return false;
    } else {
        return false;
    }
    return 'happy'
}
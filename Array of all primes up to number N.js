// https://www.codewars.com/kata/56ce75f63ae564179200211c/train/javascript

function isPrime(num){
    if(num < 2) return false;
    let count = 0;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) count++;
    }
    return count === 0;
}

function primeArray(n) {
    let arr = [];
    for(let i = 0; i <= n; i++){
        if(isPrime(i)) arr.push(i);
    }
    return arr;
}
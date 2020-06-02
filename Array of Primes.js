// https://www.codewars.com/kata/5681bc8d17af37f50e000015/train/javascript

function isPrime(n){
    if(n < 2) return false;
    let count = 0;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) count++;
    }
    return count === 0;
}

function primes(start, end){
    let arr = [];
    for(let i = start; i <= end; i++){
        if(isPrime(i)) arr.push(i);
    }
    return arr.length > 0 ? arr : null;
}
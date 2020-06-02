// https://www.codewars.com/kata/5a9a70cf5084d74ff90000f7/train/javascript

function isPrime(n){
    if(n < 2) return false;
    let count = 0;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) count++;
    }
    return count === 0;
}

function notPrimes(a,b){
    let arr = [];
    for(let i = a; i < b; i++){
        if(i.toString().split('').every(el => isPrime(el) && !isPrime(i))){
            arr.push(i);
        }
    }
    return arr;
}
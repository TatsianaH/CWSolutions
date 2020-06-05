// https://www.codewars.com/kata/57a2bd03bb9944669100042e/train/javascript

function isPrime(num){
    if(num < 2) return false;
    let count = 0;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) count++;
    }
    return count === 0;
}

function findOutPrime(n){
    let arr = [];
    n = n.toString();
    for(let i = 0; i < n.length; i++){
        for(let j = n.length; j >= 0; j--){
            let num = +(n.slice(i, j));
            if(isPrime(num)) arr.push(num);
        }
    }
    return arr.length ? Math.max(...arr) : null;
}
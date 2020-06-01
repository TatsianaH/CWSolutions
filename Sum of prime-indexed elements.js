// https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript

function isPrime(n){
    let count = 0;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) count++;
    }
    return count === 0 && n !== 0 && n !== 1;
}

function total(arr){
    if(arr.length === 0) return 0;
    let sum = 0;
    for(let i = 2; i < arr.length; i++){
        if(isPrime(i)) sum += arr[i];
    }
    return sum;
};


// 2 case

const total = a => a.reduce((r, e, i) => r + (isPrime(i) ? e : 0), 0);

const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;
    return n > 1;
}
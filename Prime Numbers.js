// https://www.codewars.com/kata/52dd72494367608ac1000416/train/javascript

function isPrime(num) {
    let count = 0;
    for(let i = 2; i <= num / 2; i++){
        if(num % i === 0) count++;
    }
    return count === 0 && num !== 0 && num !== 1 && num > 0;
}

function getPrimes(start, finish) {
    let arr = [], s, f;
    if(start < finish) {
        s = start; f = finish;
    } else {
        s = finish; f = start;
    }
    for(let i = s; i <= f; i++){
        if(isPrime(i)) arr.push(i);
    }
    return arr.sort((a, b) => a - b);
}
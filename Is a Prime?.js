// https://www.codewars.com/kata/56a194c4bd5032751e000029/train/javascript

function isPrimeTrue(n){
    if(n < 2) return false;
    let count = 0;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) count++;
    }
    return count === 0;
}

function isPrime(str) {
    if(str.toLowerCase().includes('prime')) return true;
    const s = str.replace(/[^0-9]/g, ' ').split(/\s+/);
    const res = s.map(el => +el).some(el => isPrimeTrue(el));
    return res;
}
// https://www.codewars.com/kata/5676f07029da352ba2000065/train/javascript

const largest = (n) => {
    if(n < 1 || typeof n !== 'number') return false;
    let number = 1 + '0'.repeat(n);
    while(number > 0){
        if(isPrime(number)) return number;
        number--;
    }
    return false;
}

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0 && num !== i) return false;
    }
    return true;
}
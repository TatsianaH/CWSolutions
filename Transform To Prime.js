// https://www.codewars.com/kata/transform-to-prime/train/javascript

function minimumNumber(numbers){
    const arrPrimes = [1];
    nextPrime:
        for(let i = 2; i <= 41000; i++){
            for(let j = 2; j < Math.sqrt(i); j++){
                if(i % j === 0) continue nextPrime;
            }
            arrPrimes.push(i);
        }
    let sum = numbers.reduce((a, b) => a + b, 0);
    arrPrimes.push(sum);
    arrPrimes.sort((a, b) => a - b);
    let prime = arrPrimes.indexOf(sum) + 1;
    let res = arrPrimes[prime] - sum;
    return res;
}
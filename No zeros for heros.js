// https://www.codewars.com/kata/no-zeros-for-heros/train/javascript

function noBoringZeros(n) {
    if(n === 0) return 0;
    while(n % 10 === 0){
        n = n / 10;
    }
    return n;
}
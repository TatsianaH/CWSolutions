// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript

function reverse(n){
    let revNumber = 0;
    while (n > 0){
        revNumber = (revNumber * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    return revNumber;
}
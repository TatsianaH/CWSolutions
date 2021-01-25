// https://www.codewars.com/kata/554003323fd6af1c4200004e/train/javascript

function isOdd(n) {
    if(Number.isInteger(n)){
        return n % 2 ? true : false;
    }
    return false;
}
// https://www.codewars.com/kata/5932c94f6aa4d1d786000028/train/javascript

function perfectRoots(n){
    return Number.isInteger(Math.pow(n, 0.5)) && Number.isInteger(Math.pow(n, 0.25)) && Number.isInteger(Math.pow(n, 1/8));
}
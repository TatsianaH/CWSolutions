// https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc/train/javascript

function splitByValue(k, elem){
    return elem.filter(el => el < k).concat(elem.filter(el => el >= k));
}
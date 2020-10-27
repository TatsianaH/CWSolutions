// https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript

function consecutive(arr, a, b) {
    const indA = arr.indexOf(a);
    const indB = arr.indexOf(b);
    if(indB - 1 === indA || indB + 1 === indA) return true;
    else return false;
}

// 2 variant

function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}
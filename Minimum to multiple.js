// https://www.codewars.com/kata/5e030f77cec18900322c535d/train/javascript

function minimum(a, x) {
    for(let i = 0; i < a * x; i++){
        if((a + i) % x === 0 || (a - i) % x === 0) return i;
    }
}
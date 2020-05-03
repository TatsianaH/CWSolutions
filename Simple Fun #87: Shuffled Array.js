// https://www.codewars.com/kata/589573e3f0902e8919000109/train/javascript

function shuffledArray(s) {
    let elSum = 0;
    for(let i = 0; i < s.length; i++){
        elSum = s.filter(el => el === s.reduce((a, b) => a + b , 0) - el)[0];
    }
    let ind = s.findIndex(el => el === elSum);
    s.splice(ind, 1);
    return s.sort((a, b) => a - b);
}
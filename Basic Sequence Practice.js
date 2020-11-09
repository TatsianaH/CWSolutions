// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

function sumOfN(n) {
    let arr = [];
    for(let i = 0; i <= Math.abs(n); i++){
        if(n > 0) arr.push(i);
        else arr.push(-i);
    }
    let res = [];
    for(let i = 0; i < Math.abs(n) + 1; i++){
        res[i] = arr.slice(0, i + 1).reduce((a, b) => a + b, 0);
    }
    return res;
};
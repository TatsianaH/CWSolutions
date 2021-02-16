// codewars.com/kata/5708f682c69b48047b000e07/train/javascript

function multiply(n){
    let num = n.toString().split('');
    let l = num.length;
    if(n < 0){
        l = l - 1;
        num = num.slice(1);
    }
    num = num.join('') * (5 ** l);
    return n < 0 ? (-1) * num : +num;
}

// 2 variant

function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
}
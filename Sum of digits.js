// https://www.codewars.com/kata/59cf805aaeb28438fe00001c/train/javascript

function sum(d) {
    let final = '';
    if(typeof d === 'undefined') return final;
    if(typeof d !== 'string') d = String(d);
    const arr = d.split('').map(el => +el);
    const res = arr.reduce((a, b) => a + b, 0);
    for(let i = 0; i < arr.length; i++){
        if(i === arr.length - 1) final += arr[i];
        else final += arr[i] + ' + ';
    }
    return final + ' = ' + res;
}

// 2 variant

function sum(digits) {
    let sum = 0;
    if (digits === 'undefined') return '';
    let di = digits.toString();
    for (let i = 0; i < di.length; ++i)
        sum += +di[i];
    return di.split('').join(' + ') + ' = ' + sum;
}
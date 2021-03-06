// https://www.codewars.com/kata/58846d50f54f021d90000012/train/javascript

function rounders(v) {
    let n = String(v).split('');
    let res = '';
    for(let i = n.length - 1; i >= 0; i--){
        if(n[i] >= 5 && i !== 0){
            res = 0 + res;
            n[i - 1] = +n[i - 1] + 1;
        } else if(n[i] > 9 && i === 0){
            res = 10 + res;
        } else if(+n[i] === 9 && i === 0){
            res = n[i] + res;
        } else if(n[i] >= 5 && n[i] <= 8 && i === 0){
            res = n[0] + res;
        } else if(n[i] < 5 && i === 0){
            res = n[0] + res;
        } else {
            res = 0 + res;
        }
    }
    return +res;
}

// 2 variant

function rounders(value) {
    let i = 0;
    while(value >= 10){
        value = Math.round(value / 10);
        i++;
    }
    return value * 10 ** i;
}

// 3 variant

function rounders(v) {
    let l = v.toString().length;
    let arr = v.toString().split('');
    for (let i = l - 1;i > 0;i--){
        if (arr[i] >= 5) {
            arr[i - 1] = (+arr[i - 1] + 1) + '';
        }
        arr[i] = 0;
    }
    return +arr.join('');
}
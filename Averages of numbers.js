// https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript

function averages(num) {
    let res = [];
    if(!num || num.length <= 1) return [];
    for(let i = 0; i < num.length - 1; i++){
        res.push((num[i] + num[i + 1]) / 2);
    }
    return res;
}
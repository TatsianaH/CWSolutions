// https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript

function pattern(n){
    if(n < 1) return '';
    if(n === 1) return '1';
    let res = '';
    for(let i = 1; i <= n; i++){
        if(i === n){
            res += `${i}`.repeat(i);
        } else {
            res += `${i}`.repeat(i) + '\n';
        }
    }
    return res;
}
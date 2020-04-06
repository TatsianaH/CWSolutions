// https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript

function multiples(m, n){
    let arr = [];
    let i = 1;
    while(i <= m){
        arr.push(i * n);
        i++;
    }
    return arr;
}
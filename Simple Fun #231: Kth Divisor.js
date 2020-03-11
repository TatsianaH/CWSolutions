// https://www.codewars.com/kata/5907f258d296b7cc7b000053/train/javascript

function kthDivisor(n, k) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0) arr.push(i);
        if(arr.length === k) break;
    }
    return arr[k - 1] || -1;
}
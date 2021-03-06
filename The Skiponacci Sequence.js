// https://www.codewars.com/kata/580777ee2e14accd9f000165/train/javascript

function skiponacci(n) {
    let fib = [0, 1];
    if(n === 1) return '1';
    for(let i = 2; i <= n; i++){
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    const res = fib.slice(1).map((el, i) => i % 2 ? el = 'skip' : el).join(' ');
    return res;
}

// 2 case

function skiponacci(n) {
    let arr = [1, 1];
    for (let i = 2; i < n; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    arr = arr.map((el, i) => i % 2 ? el = 'skip' : el).join(' ');
    return n === 1 ? '1' : arr;
}
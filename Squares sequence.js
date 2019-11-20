// https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

function squares(x, n) {
    let arr = [];
    if(n <= 0) return arr;
    arr[0] = x;
    for(let i = 1; i < n; i++){
        arr[i] = Math.pow(arr[i - 1], 2);

    }
    return arr;
}
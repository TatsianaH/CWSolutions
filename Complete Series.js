// https://www.codewars.com/kata/580a4001d6df740d61000301/train/javascript

function completeSeries(arr) {
    let res = [];
    let max = Math.max(...arr);
    for(let i = 0; i <= max; i++){
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return [0];
        res.push(i);
    }
    return res;
}
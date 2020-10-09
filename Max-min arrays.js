// https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript

function solve(arr){
    const asc = [...arr].sort((a, b) => a - b);
    const desc = [...arr].sort((a, b) => b - a);
    let res = [];
    for(let i = 0; i < arr.length / 2; i++){
        res.push(desc[i], asc[i]);

    }
    if(arr.length % 2 === 1) res = res.slice(0, -1);
    return res;
};

// 2 case

function solve(arr){
    let minMax = [];
    arr.sort((a,b)=>a-b);
    for(let i = 0, j = arr.length - 1; i <= j; i++,j--){
        if(i !== j) minMax.push(arr[j]), minMax.push(arr[i]);
        else minMax.push(arr[i]);
    }
    return minMax;
}
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
// https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript

function maxGap (n){
    n.sort((a, b) => b - a);
    let res = [];
    for(let i = 0; i < n.length - 1; i++){
        res.push(n[i] - n[i + 1]);
    }
    return Math.max(...res);
}
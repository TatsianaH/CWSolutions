// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript

function solve(a,b){
    let res = [];
    for(let i = 0; i < b.length; i++){
        res.push(a.filter(str => str === b[i]).length);
    }
    return res;
}
// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

function solve(arr){
    let res = [];
    arr.forEach((el, i) => {
        if(arr.lastIndexOf(el) === i) res.push(el);
    });
    return res;
}
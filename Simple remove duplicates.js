// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

function solve(arr){
    let res = [];
    arr.forEach((el, i) => {
        if(arr.lastIndexOf(el) === i) res.push(el);
    });
    return res;
}

// 2 case

function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}
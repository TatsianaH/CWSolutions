// https://www.codewars.com/kata/most-valuable-character/train/javascript

function solve(str) {
    let k = 0;
    let obj = {};
    let arr = [];
    for (var i = 0; i < str.length; i++){
        let m = str.lastIndexOf(str[i]) - str.indexOf(str[i]);
        obj[str[i]] = m;
        arr.push(m);
    }

    let max = Math.max(...arr);
    let res = 'а';
    for (let i in obj){
        if (obj[i] === max && i < res) res = i;
    }
    return res;
}
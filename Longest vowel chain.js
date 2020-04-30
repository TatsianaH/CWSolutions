// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

function solve(s){
    s = s.split(/[^uioae]/g);
    let max = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i].length > max) max = s[i].length;
    }
    return max;
}
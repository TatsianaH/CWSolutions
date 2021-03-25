// https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript

function solution(d){
    let res = 0;
    for(let i = 0; i < d.length - 4; i++){
        const nums = d.slice(i, i + 5);
        if(nums > res) res = +nums;
    }
    return res;
}
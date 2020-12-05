// https://www.codewars.com/kata/51dda84f91f5b5608b0004cc/train/javascript

function solution(n){
    let res = [0, 0, 0];
    for(let i = 1; i < n; i++){
        if(i % 3 === 0 && i % 5 !== 0) res[0]++;
        else if(i % 3 !== 0 && i % 5 === 0) res[1]++;
        else if(i % 15 === 0) res[2]++;
    }
    return res;
}
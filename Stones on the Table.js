// https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/javascript

function solve(stones) {
    let count = 0;
    for(let i = 1; i < stones.length; i++){
        if(stones[i] === stones[i - 1]) count++;
    }
    return count;
}
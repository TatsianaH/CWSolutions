// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

function solution(nums){
    if(!nums || nums.length === 0) return [];
    else return nums.sort((a, b) => a - b);
}

// 2 case

function solution(nums){
    return (nums || []).sort(function(a, b){
        return a - b
    });
}
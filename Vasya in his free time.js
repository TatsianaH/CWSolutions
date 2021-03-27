// https://www.codewars.com/kata/559011063089b0d5500001aa/train/javascript

function CalculateString(n, nums){
    while(nums.includes('1') && nums.includes('0')){
        nums = nums.replace('1', '').replace('0', '');
    }
    return nums.length;
}

// 2 variant

function CalculateString(n, nums){
    let zeroCnt = 0;
    let oneCnt = 0;
    for(let num of nums) {
        num === '1' ? (oneCnt++) : (zeroCnt++);
    }
    return Math.abs(zeroCnt - oneCnt);
}
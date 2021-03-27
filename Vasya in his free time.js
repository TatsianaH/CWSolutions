// https://www.codewars.com/kata/559011063089b0d5500001aa/train/javascript

function CalculateString(n, nums){
    while(nums.includes('1') && nums.includes('0')){
        nums = nums.replace('1', '').replace('0', '');
    }
    return nums.length;
}
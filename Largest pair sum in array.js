// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum(nums){
    nums.sort((a, b) => b - a);
    return nums[0] + nums[1];
}
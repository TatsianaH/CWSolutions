// https://www.codewars.com/kata/grasshopper-array-mean/train/javascript

var findAverage = function (nums) {
    return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
}
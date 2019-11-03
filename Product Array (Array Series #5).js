//https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

function productArray(nums){
  let arr = [];
  if(nums.length === 0) return [];
  if(nums.length === 1) return nums;
  if(nums.length === 2) return [nums[0], nums[1]] = [nums[1], nums[0]];
  if(nums.length > 2){
    for(let i = 0; i < nums.length; i++){
      let temp = nums.shift();
        arr[i] = nums.reduce((a, b) => a * b, 1);
    nums.push(temp);
    }
  }
  return arr;
}
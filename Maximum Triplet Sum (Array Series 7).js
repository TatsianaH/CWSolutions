//https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7/train/javascript

  function maxTriSum(numbers){
    return numbers.filter((el, i )=> i === numbers.lastIndexOf(el))
    .sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b, 0);
  }
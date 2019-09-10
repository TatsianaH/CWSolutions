//https://www.codewars.com/kata/two-sum/train/javascript

function twoSum(numbers, target) {
  const arr = [];
    for(let i = 0; i < numbers.length; i++){
      for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] + numbers[j] === target){
          if(!arr.includes(i) && !arr.includes(j)) {
            arr.push(i, j);
           }
        }
      }
    }
    return arr;
}
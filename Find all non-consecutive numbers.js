//https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/javascript

function allNonConsecutive (arr) {
  let res = [];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] - 1 !== arr[i - 1]){
      res.push({'i': i, 'n': arr[i]});
    }
  }
  return res;
}
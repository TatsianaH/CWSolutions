//https://www.codewars.com/kata/tribonacci-sequence/train/javascript

  function tribonacci(signature,n){
    if(n === 0) return [];
    if(n === 1) return [signature[0]];
    const arr = [];
      arr.push(signature[0],signature[1],signature[2]);
    let s = signature.reduce((a, b) => a + b, 0);
      arr.push(s);
    for(let i = arr.length; i < n; i++){
      arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
    }
      return arr;
  }

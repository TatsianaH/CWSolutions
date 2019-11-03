//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

  function countSmileys(arr) {
  let count = 0;
    for(let i = 0; i < arr.length; i++){
      if (/(\:|\;)(\~|\-|)(\)|[D])/.test(arr[i])){
        count++;
      }
    }
    return count;
  }
//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

  function getMiddle(s){
    let res;
    let n = Math.floor(s.length / 2)
    if(s.length % 2 === 0){
      res = s[n - 1] + s[n];
    } else {
      res = s[n];
    }
    return res;
  }
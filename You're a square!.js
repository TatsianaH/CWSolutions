//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

  var isSquare = function(n){
    if(n < 0) return false;
    let num = Math.sqrt(n);
    if(Number.isInteger(num)){
      return true;
    } else {
      return false;
    }
  }

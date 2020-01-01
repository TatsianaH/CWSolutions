// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

String.prototype.toAlternatingCase = function () {
  let alternatedCase = '';
  for(let i = 0; i < this.length; i++){
    if(this[i] === this[i].toLowerCase()){
      alternatedCase += this[i].toUpperCase();
    } else {
    alternatedCase += this[i].toLowerCase();
    }
  }
  return alternatedCase;
}
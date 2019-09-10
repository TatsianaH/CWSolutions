//https://www.codewars.com/kata/vowel-one/train/javascript

function vowelOne(s){
  return s.replace(/[0-9]/gi, '0').replace(/[aeuio]/gi, '1').replace(/\D/gi, '0');
 }
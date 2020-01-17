//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  let ind = 0;
  let res = str.split('').filter((el, i) => i ===str.indexOf(el) && i === str.lastIndexOf(el));
  if(res[0] !== undefined){
    ind = str.indexOf(res[0]);
  return s[ind];
  } else{
    return  '';
  }
}

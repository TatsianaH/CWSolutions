//https://www.codewars.com/kata/check-three-and-two/train/javascript

function checkThreeAndTwo(array) {
  const a = array.filter(el=> el === 'a').length;
  const b = array.filter(el=> el === 'b').length;
  const c = array.filter(el=> el === 'c').length;
    if(a === 2 && b === 3) return true;
    if(a === 3 && b === 2) return true;
    if(b === 2 && c === 3) return true;
    if(a === 2 && c === 3) return true;
    if(a === 3 && c === 2) return true;
    if(b === 3 && c === 2) return true;
    if(b === 2 && c === 3) return true;
 return false;
}

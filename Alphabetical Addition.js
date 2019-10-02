//https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

function addLetters(...letters) {
  let alph = '0abcdefghijklmnopqrstuvwxyz';
  let symb = letters.reduce((acc, curr) => acc + (curr.charCodeAt() - 96), 0);
  if(symb % 26 === 0) return alph[26];
  if(symb > 26) {
  let ind = symb % 26;
  return alph[ind];
  } else {
  return alph[symb];
  }
}
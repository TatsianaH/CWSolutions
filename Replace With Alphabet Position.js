//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let num = [];
  for(let i = 0; i < text.length; i++){
    text = text.toLowerCase();
  if(alph.indexOf(text[i]) === -1) continue;
    num.push(alph.indexOf(text[i]) + 1);
  }
  return num.join(' ');
}
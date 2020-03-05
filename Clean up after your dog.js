// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript

function crap(x, bags, cap){
  let total = bags * cap;
  let str = x.toString();
  if(str.includes('D')) return 'Dog!!';
    const a = str.split('@').length - 1;
    if(a <= total)
    return  'Clean';
      return 'Cr@p';
}

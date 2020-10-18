// https://www.codewars.com/kata/52774a314c2333f0a7000688/solutions/javascript

function validParentheses(parens){
  if(parens === '') return true;
  let res = false;
  if(!parens.includes('(') || !parens.includes(')')){
    return res;
  } else if(parens.match(/\(/g).length === parens.match(/\)/g).length) {
    if(parens.indexOf('(') < parens.indexOf(')') && parens.lastIndexOf('(') < parens.lastIndexOf(')')){
      res =  true;
    }
  }
  return res;
}

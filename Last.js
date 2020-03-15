// https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript

function last(...list){
  let str = list.join();
  if(str.includes(',')) str = str.split(',');
  return !isNaN(+str[str.length-1]) ? +str[str.length-1] : str[str.length-1];
}

//2 variant

function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
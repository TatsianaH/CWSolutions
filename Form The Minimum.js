//https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

function minValue(values){
  let res = values.filter((el, i) => i === values.lastIndexOf(el)).sort();
  return +res.join('');
}
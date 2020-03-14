// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

var arrayLeaders = num => {
  let arr = [];
  for(let i = 0; i < num.length; i++){
    let a = num.slice(i + 1).reduce((a, b) => a + b, 0);
    if(num[i] > a){
      arr.push(num[i]);
    }
  }
  return arr;
}
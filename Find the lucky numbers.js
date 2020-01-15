// https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript

var filterLucky=x=>{
  let res = x.map(el => el.toString());
  let arr = [];
  for(let i = 0; i < res.length; i++){
    if(res[i].includes('7')){
      arr.push(res[i]);
    }
  }
  return arr.map(el => +el);
}
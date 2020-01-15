// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
  const arr = [];
  let count = 0;
  for(let i = 0; i <= n; i++){
    arr.push(i);
  }
  let num = arr.map(el => (Math.pow(el, 2)).toString());
  for(let i = 0; i < num.length; i++){
    if(num[i].includes(d)){
      count += num[i].split('').filter(el => +el === d).length;
    }
  }
  return count;
}
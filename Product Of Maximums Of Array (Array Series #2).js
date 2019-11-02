//https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript

function maxProduct(num, size){
 let arr = num.sort((a, b) => b - a);
 let res = arr.slice(0, size).reduce((a, b) => a * b, 1);
 return res;
}
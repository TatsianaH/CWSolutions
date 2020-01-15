// https://www.codewars.com/kata/camelcase-method/train/javascript

String.prototype.camelCase=function(){
  if(this.length === 0) {
    return '';
  } else {
  const arr = this.trim().split(' ');
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
  }
   return arr.join('');
  }
}
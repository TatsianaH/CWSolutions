// https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript

function broken(x){
  let arr = x.split('');
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '1'){
      arr[i] = '0';
    } else if(arr[i] === '0'){
      arr[i] = '1';
    }
  }
  return arr.join('');
}
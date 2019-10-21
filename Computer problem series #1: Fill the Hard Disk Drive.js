//https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/javascript

function save(sizes, hd) {
  let count = [];
  if(sizes[0] <= hd){
    count.push(sizes[0])
  } else {
    return 0;
  }
  for(let i = 1; i < sizes.length; i++){
    if(sizes[i] + count.reduce((a, b) => a + b, 0) <= hd){
      count.push(sizes[i]);
    } else {
      break;
    }
  }
  return count.length;
}
// https://www.codewars.com/kata/the-office-v-find-a-chair/train/javascript

function meeting(x, need){
  if(need === 0) return 'Game On';
  let arr = [];
  let res = 0;
  for(let i = 0; i < x.length; i++){
    let freeCh = x[i][1] - x[i][0].length;
    if(freeCh >= 0) {
      arr.push(freeCh);
    } else {
      arr.push(0);
    }
    res = arr.reduce((a, b) => a + b, 0);
    if(res > need){
      arr[arr.length - 1] = arr[arr.length - 1] - (res - need);
    break;
    }
    if(res === need) break;
  }
  if(res < need) return 'Not enough!';
  return arr;
}
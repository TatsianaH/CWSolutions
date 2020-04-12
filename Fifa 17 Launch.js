// https://www.codewars.com/kata/fifa-17-launch/train/javascript

function fifa(ticket, results){
  let res = 0;
  const arr = results.map(el => el.split('-').map(el => +el));
  let arr2 = Object.values(ticket).map(el => +(el.slice(1, el.length)));
  if(arr[0][0] > arr[0][1]){
    res += arr2[0];
  }
  if(arr[1][1] > arr[1][0]){
    res += arr2[1];
  }
  if(arr[2][0] === arr[2][1]){
    res += arr2[2]
  }
  return `£${res}`;
}
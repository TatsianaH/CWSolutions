// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
    ```javascript
var min = function(list){
let numMin = list[0];
for(let i = 0; i < list.length; i++){
  if(numMin > list[i]){
    numMin = list[i];
  }
}
  return numMin;
}

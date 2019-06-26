# Hello!
## Nice to meet you here!

* https://www.codewars.com/kata/sort-and-star/train/javascript

```javascript
function twoSort(s) {
    s.sort();
return s[0].split('').join('***') ;
}
```
* https://www.codewars.com/kata/adults-only-sql-for-beginners-number-1/train/sql
```SQL
select*
from users
where age >= 18
```
* https://www.codewars.com/kata/difference-of-squares/train/javascript
```javascript
function differenceOfSquares(n){
  let resN = 0;
  let resOneN = 0;
  for(let i = 1; i <= n; i++){
    resOneN += i;
    resN += Math.pow(i, 2);
  }
  resOneN = Math.pow(resOneN,2);
  return resOneN - resN;
}
```
* https://www.codewars.com/kata/century-from-year/train/javascript
```javascript
function century(year) { 
  return Math.ceil(year/100);
}
```
* https://www.codewars.com/kata/discover-the-original-price/train/javascript
```javascript
function discoverOriginalPrice(discountedPrice, salePercentage){
  let res = +(discountedPrice * 100 / (100 - salePercentage)).toFixed(2);
  return res;
}
```
* Clocky Mc Clock-Face https://www.codewars.com/kata/clocky-mc-clock-face/train/javascript
```javascript
var whatTimeIsIt = function(angle) {
    let totalMinutes = angle * 2;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = Math.floor(totalMinutes % 60);
      if(hours === 0) hours = '12';
        if(hours < 10) hours = '0' + hours;
          if(minutes < 10) minutes = '0' + minutes;
  return `${hours}:${minutes}`;    
};
```
* Find the divisors!
https://www.codewars.com/kata/find-the-divisors/train/javascript
```javascript
function divisors(integer) {
const list = [];
  for(let i = 2; i < integer; i++){
    if(integer % i === 0) {
      list.push(i);
    }  
  }
  return (list[0] !== undefined) ? list : integer + ' is prime';;
};
```
* Difference of Volumes of Cuboids
https://www.codewars.com/kata/difference-of-volumes-of-cuboids/train/javascript
```javascript
function findDifference(a, b) {
  let aA = a.reduce((acc, curr) => acc * curr, 1);
  let bB = b.reduce((acc, curr) => acc * curr, 1);
  return Math.abs(aA - bB);
}
```
* Number of People in the Bus
https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript
```javascript
var number = function(busStops) {
  let getIn = 0;
  let getOff = 0;
  for (let i = 0; i < busStops.length; i++) {
    getIn += busStops[i][0];
    getOff += busStops[i][1];
  }
  return getIn - getOff;
};
```
* Two Sum
https://www.codewars.com/kata/two-sum/train/javascript
```javascript
function twoSum(numbers, target) {
  const arr = [];
    for(let i = 0; i < numbers.length; i++){  
      for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] + numbers[j] === target){
          if(!arr.includes(i) && !arr.includes(j)) {
            arr.push(i, j); 
           } 
        }
      }
    }
    return arr;
}
```
* String average
https://www.codewars.com/kata/string-average/train/javascript
```javascript
function averageString(str) {
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arr2 = str.split(' ').map(el => arr.indexOf(el));
  let res = Math.floor(arr2.reduce((a, b) => a + b, 0) / arr2.length);
  res = arr[res];
  if(arr2.includes(-1)){
     res = 'n/a';
  }
  return (str.length >= 1) ? res : 'n/a'; 
}
```
*Sum of Odd Cubed Numbers
https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript
```javascript
function cubeOdd(arr) {
  let res;
  let arr2 = [];
    if(arr.find(el => typeof el !== 'number')) {
      res = undefined;
    } else {
       arr2 = arr.filter((el) => typeof el === 'number' && Math.abs(el) % 2 === 1);
       res = arr2.map(el => el ** 3).reduce((acc, curr) => acc + curr, 0);
    }     
  return res;      
}
```
* Vowel one
https://www.codewars.com/kata/vowel-one/train/javascript
```javascript
function vowelOne(s){  
  return s.replace(/[0-9]/gi, '0').replace(/[aeuio]/gi, '1').replace(/\D/gi, '0');
 } 
```
*Print a Rectangle Using Asterisks
https://www.codewars.com/kata/print-a-rectangle-using-asterisks/train/javascript
```javascript
function getRectangleString(width, height) {
  let rn = '\r\n' ;
  let tb = '*'.repeat(width) + rn;
  let centre = (width > 1) ? ('*' + ' '.repeat(width - 2) + '*' + rn) : '';
  return (height > 1) ? (tb + centre.repeat(height - 2) + tb) : (tb.repeat(height));
}
```
*Random case
```javascript
function randomCase(x) {
  const arr = x.split('').map(el => Math.random() < 0.5 ? el.toUpperCase() : el.toLowerCase());
  return arr.join('');
}
```
*Mumbling
https://www.codewars.com/kata/mumbling/train/javascript
```javascript
function accum(s) {
  let str = s.toUpperCase();
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    newStr += str[i] + str[i].toLowerCase().repeat(i) + '-';
  }
  return newStr.slice(0, newStr.length - 1);  
}
```
*Are the numbers in order?
https://www.codewars.com/kata/are-the-numbers-in-order/train/javascript
```javascript
function inAscOrder(arr) {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i + 1]) return false;
    }
    return true;
}
```
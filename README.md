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
* Array Array Array
https://www.codewars.com/kata/57eb936de1051801d500008a/solutions/javascript
```javascript
function explode(x){
  let rept = x.filter(el => typeof el === 'number').reduce((a, b) => a + b, 0);
  return rept ? new Array(rept).fill(x) : 'Void!';
}
```

*Maximum Triplet Sum (Array Series #7)
https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7/train/javascript
```javascript
function maxTriSum(numbers){
  let a = numbers.filter((el, i) => i === numbers.indexOf(el)).sort((a, b) => b - a);
  let res = a[0] + a[1] + a[2];
  return res;
}
```
*Where my anagrams at?
https://www.codewars.com/kata/where-my-anagrams-at/train/javascript
```javascript
function anagrams(word, words) {
  const arr = [];
  let a = word.split('').sort().join('');
  for (let i = 0; i < words.length; i++) {
    let b = words[i].split('').sort().join('');
    if (a.length === b.length && a === b){
      arr.push(words[i]);
    }
  }
return arr;
}
```
*Shortest Code : Special factor
https://www.codewars.com/kata/shortest-code-special-factor/train/javascript
```javascript
var sc = n=>{
  return [...Array(n).keys(),n]
    .filter(v=>n%v === 0)
    .filter(v=>n.toString(2).includes(v.toString(2)));
}
```
*Arrays Similar
https://www.codewars.com/kata/arrays-similar/train/javascript
```javascript
function arraysSimilar(arr1, arr2) {    
  arr1.sort();
  arr2.sort();
  return (arr1.length > arr2.length) ? arr1.every((el,i) => el === arr2[i]) : arr2.every((el, i) => el === arr1[i]);  
}
```
*A Gift Well Spent
https://www.codewars.com/kata/a-gift-well-spent/train/javascript
```javascript
var buy = function(x, arr){
  for(let i = 0; i< arr.length; i++){
    for(let j = 1; j < arr.length; j++){
      if(arr[i] + arr[j] === x){
        return [i, j];
      } 
    }
  }
  return null;
};
```
*Numerical Palindrome #1
https://www.codewars.com/kata/numerical-palindrome-number-1/train/javascript
```javascript
function palindrome(num) { 
if(typeof num !== 'number' || num < 0){
  return 'Not valid';
  }
  const arr = +(num.toString().split('').reverse().join(''));
  return arr === num;
} 
```
*Find the calculation type
https://www.codewars.com/kata/find-the-calculation-type/train/javascript
```javascript
function calcType(a, b, res) {
  if(a + b === res){
    return 'addition';
    } else if(a - b === res){
      return 'subtraction';
    } else if (a * b === res){
    return 'multiplication';
    } else {
      return 'division';
    } 
}
```
*Simple beads count
https://www.codewars.com/kata/simple-beads-count/train/javascript
```javascript
function countRedBeads(n) {
if(n < 2) return 0;
  return (n - 1) * 2;
 }
```
*Reverse a Number
https://www.codewars.com/kata/reverse-a-number/train/javascript
```javascript
function reverseNumber(n) {
  if(n >= 0){
    const arr = n.toString().split('').reverse();
    return +(arr.join(''));
  } else {
    n *= -1;
    return (-1) * n.toString().split('').reverse().join('');
  }
}
```

*Numerical Palindrome #1
https://www.codewars.com/kata/numerical-palindrome-number-1/train/javascript
```javascript
function palindrome(num) {   
  let str = '';
  if(typeof num !== 'number' || num < 0){
    return 'Not valid';
  }
  str += num;
  for(let i = 0; i < Math.floor(str.length/2); i++){
    if(str[i] !== str[str.length - 1- i]){
      return false;
    }
  }  
  return true;
}
```
*IQ Test
https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
```javascript
function iqTest(numbers){
  const arr = numbers.split(' ').map(el => +el);
  let res1 = arr.filter(el => el % 2 === 0);
  let res2 = arr.filter(el => el % 2 === 1);
  return res1.length < res2.length ? (arr.indexOf(res1[0]) + 1) : (arr.indexOf(res2[0]) + 1);
}
```  

*Stop gninnipS My sdroW!
https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
```javascript
unction spinWords(a){
  const arr = a.split(' ');
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length >= 5){
      arr[i] = arr[i].split('').reverse().join('');
    }
  }
  return arr.join(' ');
}
```

*Get list sum recursively
https://www.codewars.com/kata/get-list-sum-recursively/train/javascript
```javascript
function sumR(x) {
  if(x.length === 0) {
    return 0;
  } 
    return  x.shift() + sumR(x);
}
```
*Beginner Series #3 Sum of Numbers
https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
```javascript
function GetSum( a,b ){
  if(a === b) return a;
  let res = 0;
  if(a < b){
    for(let i = a; i <= b; i++){
      res += i;
    }
  } else {
    for(let i = b; i <= a; i++){
      res += i;
  }
}
  return res;
}
```

*Square Every Digit
https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
```javascript
function squareDigits(num){
  return +(num.toString().split('').map(el => el ** 2).join(''));
}
```
*Hex to Decimal
https://www.codewars.com/kata/hex-to-decimal/train/javascript
```javascript
function hexToDec(hexString){
  return Number.parseInt(hexString, 16);
}
```
*Sort the odd
https://www.codewars.com/kata/sort-the-odd/train/javascript
```javascript
function sortArray(arr) {
  const arrOdd = arr.filter(el => el % 2).sort((a,b) => a - b);
  return arr.map(el => el % 2 ? arrOdd.shift() : el);
}
```
*Create Four Letter Birding Codes from Bird Names
https://www.codewars.com/kata/create-four-letter-birding-codes-from-bird-names/train/javascript
```javascript
function birdCode(arr) {
console.log(arr)
  const arr2 = arr.map(el => el.replace(/-/g, ' ').toUpperCase().split(' '));
  let res = '';
  let newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].length === 1) {
      res = arr2[i][0].substr(0, 4);
      newArr.push(res);
    }
    if (arr2[i].length === 2) {
      res = arr2[i][0].substr(0, 2) + arr2[i][1].substr(0, 2);
      newArr.push(res);
    }
    if (arr2[i].length === 3) {
      res = arr2[i][0].substr(0, 1) + arr2[i][1].substr(0, 1) + arr2[i][2].substr(0, 2);
      newArr.push(res);
    }
    if (arr2[i].length === 4) {
      res = arr2[i][0].substr(0, 1) + arr2[i][1].substr(0, 1) +
        arr2[i][2].substr(0, 1) + arr2[i][3].substr(0, 1);
      newArr.push(res);
    }
  }
  return newArr;
}
```

*RGB To Hex Conversion
https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript
```javascript
function rgb(r, g, b) {
  let trans = function (n) {
    let num = n.toString(16);
    if (n >= 255) num = 'FF';
    if(n <= 0) num = '00';
    return (num.length === 1) ? ('0' + num) : num;
    }
  return (trans(r) + trans(g) + trans(b)).toUpperCase();
}
```
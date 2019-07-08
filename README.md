# Hello! 
## Nice to meet you here! 

*https://www.codewars.com/kata/sort-and-star/train/javascript*

```javascript
function twoSort(s) {
    s.sort();
return s[0].split('').join('***') ;
}
```
*https://www.codewars.com/kata/adults-only-sql-for-beginners-number-1/train/sql*
```SQL
select*
from users
where age >= 18
```
*https://www.codewars.com/kata/difference-of-squares/train/javascript*
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
*https://www.codewars.com/kata/century-from-year/train/javascript*
```javascript
function century(year) { 
  return Math.ceil(year/100);
}
```
*https://www.codewars.com/kata/discover-the-original-price/train/javascript*
```javascript
function discoverOriginalPrice(discountedPrice, salePercentage){
  let res = +(discountedPrice * 100 / (100 - salePercentage)).toFixed(2);
  return res;
}
```
*Clocky Mc Clock-Face https://www.codewars.com/kata/clocky-mc-clock-face/train/javascript*
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
*Find the divisors!*
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
*Difference of Volumes of Cuboids*
https://www.codewars.com/kata/difference-of-volumes-of-cuboids/train/javascript
```javascript
function findDifference(a, b) {
  let aA = a.reduce((acc, curr) => acc * curr, 1);
  let bB = b.reduce((acc, curr) => acc * curr, 1);
  return Math.abs(aA - bB);
}
```
*Number of People in the Bus*
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
*Two Sum*
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
*String average*
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
*Sum of Odd Cubed Numbers*
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
*Vowel one*
https://www.codewars.com/kata/vowel-one/train/javascript
```javascript
function vowelOne(s){  
  return s.replace(/[0-9]/gi, '0').replace(/[aeuio]/gi, '1').replace(/\D/gi, '0');
 } 
```
*Print a Rectangle Using Asterisks*
https://www.codewars.com/kata/print-a-rectangle-using-asterisks/train/javascript
```javascript
function getRectangleString(width, height) {
  let rn = '\r\n' ;
  let tb = '*'.repeat(width) + rn;
  let centre = (width > 1) ? ('*' + ' '.repeat(width - 2) + '*' + rn) : '';
  return (height > 1) ? (tb + centre.repeat(height - 2) + tb) : (tb.repeat(height));
}
```
*Random case*
```javascript
function randomCase(x) {
  const arr = x.split('').map(el => Math.random() < 0.5 ? el.toUpperCase() : el.toLowerCase());
  return arr.join('');
}
```
*Mumbling*
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
*Are the numbers in order?*
https://www.codewars.com/kata/are-the-numbers-in-order/train/javascript
```javascript
function inAscOrder(arr) {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i + 1]) return false;
    }
    return true;
}
```
*Array Array Array*
https://www.codewars.com/kata/57eb936de1051801d500008a/solutions/javascript
```javascript
function explode(x){
  let rept = x.filter(el => typeof el === 'number').reduce((a, b) => a + b, 0);
  return rept ? new Array(rept).fill(x) : 'Void!';
}
```

*Maximum Triplet Sum (Array Series #7)*
https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7/train/javascript
```javascript
function maxTriSum(numbers){
  let a = numbers.filter((el, i) => i === numbers.indexOf(el)).sort((a, b) => b - a);
  let res = a[0] + a[1] + a[2];
  return res;
}
```
*Where my anagrams at?*
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
*Shortest Code : Special factor*
https://www.codewars.com/kata/shortest-code-special-factor/train/javascript
```javascript
var sc = n=>{
  return [...Array(n).keys(),n]
    .filter(v=>n%v === 0)
    .filter(v=>n.toString(2).includes(v.toString(2)));
}
```
*Arrays Similar*
https://www.codewars.com/kata/arrays-similar/train/javascript
```javascript
function arraysSimilar(arr1, arr2) {    
  arr1.sort();
  arr2.sort();
  return (arr1.length > arr2.length) ? arr1.every((el,i) => el === arr2[i]) : arr2.every((el, i) => el === arr1[i]);  
}
```
*A Gift Well Spent*
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
*Numerical Palindrome #1*
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
*Find the calculation type*
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
*Simple beads count*
https://www.codewars.com/kata/simple-beads-count/train/javascript
```javascript
function countRedBeads(n) {
if(n < 2) return 0;
  return (n - 1) * 2;
 }
```
*Reverse a Number*
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

*Numerical Palindrome #1*
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
*IQ Test*
https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
```javascript
function iqTest(numbers){
  const arr = numbers.split(' ').map(el => +el);
  let res1 = arr.filter(el => el % 2 === 0);
  let res2 = arr.filter(el => el % 2 === 1);
  return res1.length < res2.length ? (arr.indexOf(res1[0]) + 1) : (arr.indexOf(res2[0]) + 1);
}
```  

*Stop gninnipS My sdroW!*
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

*Get list sum recursively*
https://www.codewars.com/kata/get-list-sum-recursively/train/javascript
```javascript
function sumR(x) {
  if(x.length === 0) {
    return 0;
  } 
    return  x.shift() + sumR(x);
}
```
*Beginner Series #3 Sum of Numbers*
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

*Square Every Digit*
https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
```javascript
function squareDigits(num){
  return +(num.toString().split('').map(el => el ** 2).join(''));
}
```
*Hex to Decimal*
https://www.codewars.com/kata/hex-to-decimal/train/javascript
```javascript
function hexToDec(hexString){
  return Number.parseInt(hexString, 16);
}
```
*Sort the odd*
https://www.codewars.com/kata/sort-the-odd/train/javascript
```javascript
function sortArray(arr) {
  const arrOdd = arr.filter(el => el % 2).sort((a,b) => a - b);
  return arr.map(el => el % 2 ? arrOdd.shift() : el);
}
```
*Create Four Letter Birding Codes from Bird Names*
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

*RGB To Hex Conversion*
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
*Maximum Triplet Sum (Array Series #7)*
https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7/train/javascript
```javascript
function maxTriSum(numbers){
  return numbers.filter((el, i )=> i === numbers.lastIndexOf(el))
  .sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b, 0);
}
```

*Two to One*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
```javascript
function longest(s1, s2) {
  let str = s1 + s2;
  return str.split('').filter((el, i) =>  i === str.lastIndexOf(el)).sort().join('');
  // your code
}
```
*Alphabet symmetry*
https://www.codewars.com/kata/alphabet-symmetry/train/javascript
```javascript
function solve(arr){  
  let str = 'abcdefghijklmnopqrstuvwxyz';
  return arr.map(el => el.toLowerCase().split('').filter((e, i) => i === str.indexOf(e)).length);
}
```  
*Sum without highest and lowest number*
https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript
```javascript
function sumArray(arr) {
  if(!arr || !arr.length || arr.length <= 1){
    return 0;
  }
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
      if(max < arr[i]) {
        max = arr[i];
     }
      if(min > arr[i]) {
        min = arr[i];
      }
    }
  return sum - max - min;
}
```
*2 version*
```javascript
function sumArray(arr) {
  if(!arr || !arr.length || arr.length <= 1){
    return 0;
  }
  return arr.sort((a, b) => a - b).slice(1, arr.length -1).reduce((a, b) => a + b, 0);
}
```
*Proof Read*
https://www.codewars.com/kata/583710f6b468c07ba1000017/train/javascript
```javascript
function proofread(str) {
  let str2 = str.toLowerCase().replace(/ie/g, 'ei');
  const arr = str2.split('. ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
  }
  return arr.join('. ');
}
```

*String Reordering*
https://www.codewars.com/kata/string-reordering/train/javascript
```javascript
function sentence(List) {
  let arr = List.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0]);
  return arr.map(el => Object.values(el)[0]).join(' ');
}
```
*Disemvowel Trolls*
https://www.codewars.com/kata/disemvowel-trolls/train/javascript
```javascript 
function disemvowel(str) {
  return str.replace(/[aeiuo]/gi, '');
}
```

*Convert string to camel case*
https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript
```javascript 
function toCamelCase(str){
  if(str === '') {
    return '';
  } 
    str = str.replace(/-/g, ' ').replace(/_/g, ' ');
    const arr = str.split(' ');
    for(let i = 1; i < arr.length; i++){  
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
    }
  return arr.join('');
}
```
***
*Random case*
https://www.codewars.com/kata/random-case/train/javascript
```javascript 
function randomCase(x) {
let str = '';
  for(let i = 0; i < x.length; i++){
    if(Math.round(Math.random()) > 0) {
      str +=  x[i].toUpperCase();
    } else {
     str +=  x[i].toLowerCase();
    }
  }
 return str;
}
```

*Alphabet symmetry*
https://www.codewars.com/kata/alphabet-symmetry/train/javascript
```javascript
function solve(arr){  
  let arr2 = [];
  let alp = 'abcdefghijklmnopqrstuvwxyz';
  for(let i = 0; i < arr.length; i++){
    let count = 0;
    for(let j = 0; j < arr[i].length; j++){
      if (j === alp.indexOf(arr[i][j].toLowerCase()) ){
         count++;
      }
    }
      arr2.push(count);
  }
    return arr2;
}
```
*Regex validate PIN code*
https://www.codewars.com/kata/regex-validate-pin-code/train/javascript
```javascript
function validatePIN (pin) {
  if(pin.length < 4 || pin.length > 6 || pin.length === 5){
    return false;
  }
  if (pin.length === 4 || pin.length === 6){
    let num = pin.match(/[0-9]/g).length;
    if(pin.length === num){
      return true;
    } else {
      return false;
    }
  }
}
```
*Dubstep*
https://www.codewars.com/kata/dubstep/train/javascript
```javascript
function songDecoder(song){  
  return song.replace(/WUB/g, ' ').replace(/\s+/g, ' ').trim();
}
```
*Bumps in the Road*
https://www.codewars.com/kata/bumps-in-the-road/train/javascript
```javascript
function bump(x){
  if(!x.match(/n/)) {
    return 'Woohoo!';
    }
  if(x.match(/n/g).length > 15 ){
    return 'Car Dead';
  }
    return 'Woohoo!';
  }
```
*Simple validation of a username with regex*
https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/train/javascript
```javascript
function validateUsr(username) {
  if(username.length < 4 || username.length > 16){
    return false;
  }
  if(username.match(/[^a-z0-9_]/)) {
    return false;
  }
  return true;
```
*2 version*    
```javascript
function validateUsr(username) {
  if(username.length < 4 || username.length > 16){
    return false;
    } 
  if(username.length >= 4 && username.length <= 16){
  let regexp = /[A-Z\s]/;
  let res = regexp.test(username);  
  return !res;
}
```
*3 version*
```javascript
function validateUsr(username) {
  let res =  /^[a-z0-9_]{4,16}$/.test(username); 
  return res;
}
```
*Format a string of names like 'Bart, Lisa & Maggie'.*
https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
```javascript
function list(names){
  let str = '';
  const arr = names.map(el => Object.values(el)[0]);
  if(arr.length === 0){
    return '';
  }
  if (arr.length === 1){
    return arr[0];
  }
  if(arr.length >= 2){
    for(let i = 0; i < arr.length; i++){
      if (i === arr.length - 1){
        str += ' & ';
      }
      if(i === arr.length - 2 || arr[i] === arr[arr.length - 1]){
        str += arr[i];
      } else {
        str += arr[i] + ', '
      }
    }
  }
  return str;
}
```

*Bingo Card*
https://www.codewars.com/kata/bingo-card/train/javascript
```javascript
function getCard(){
  let card = [];
  while (card.length < 5){
    let line = 'B' + (Math.floor(Math.random() * 15) + 1).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  while (card.length < 10){
    let line = 'I' + (Math.floor(Math.random() * 15) + 16).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  while (card.length < 14){
    let line = 'N' + (Math.floor(Math.random() * 15) + 31).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  while (card.length < 19){
    let line = 'G' + (Math.floor(Math.random() * 15) + 46).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  while (card.length < 24){
    let line = 'O' + (Math.floor(Math.random() * 15) + 61).toString();
    if(card.indexOf(line) === -1) {
      card.push(line);
    }
  }
  return card;
}
```
*Simple Fun #276: Book Partition*

```javascript
function bookPartition(m, p, c) {
  let res = 0;
  let mM = (m - (m % 3)) / 3;// amount of m group
  let pP =(p - (p % 3)) / 3;// amount of p group 
  let cC = (c - (c % 3)) / 3;// amount of c group
  let our = m % 3 + p % 3 + c % 3; 
  let our2 =  (our - (our % 3)) / 3;
  if(our <= 3){
    if(m % 3 === 0 || p % 3 === 0 || c % 3 === 0){
      return res = mM + pP + cC;
    } else {
      return res = mM + pP + cC + our2;
    }
  } else {
    return res = mM + pP + cC + our2;
  }
}
```
*Numbers in strings*

```javascript
function solve(s){
  let str = s.match(/\d+/g).sort((a, b) => a - b);
    return +str[str.length - 1];
}
```
*Get the Middle Character*
https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
```javascript
function getMiddle(s){
  let res;
  let n = Math.floor(s.length / 2)
  if(s.length % 2 === 0){
    res = s[n - 1] + s[n];
  } else {
    res = s[n];
  }
  return res;
}
```
*Detect Pangram*
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
```javascript
function isPangram(str){
  let str2 = str.toLowerCase().replace(/\d/g, '').replace(/\W/g, '');
    str2 = str2.split('').filter((el, i)=> i === str2.indexOf(el)).sort().join('').trim();
  let alp = 'abcdefghijklmnopqrstuvwxyz';
  if(str2 === alp){
    return true;
  } else {
    return false;
  }
}
```
*Validate Credit Card Number*
https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript
```javascript
function validate(n) {
  let card = n.toString().split('').map(el => +el);
  if (card.length % 2 === 0) {
    for (let i = 0; i < card.length; i = i + 2) {
      card[i] = card[i] * 2;
      if (card[i] > 9) {
        card[i] = card[i] - 9;
      }
    }
  }
  if (card.length % 2 === 1) {
    for (let i = 1; i < card.length; i = i + 2) {
      card[i] = card[i] * 2;
      if (card[i] > 9) {
        card[i] = card[i] - 9;
      }
    }
  }
  let res = card.reduce((a, b) => a + b, 0);
  return res % 10 === 0;
}
```
*Mexican Wave*
https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
```javascript
function wave(n){
  if(n === ''){
    return [];
  }
  const arr = [];
  const arr2 = n.toLowerCase().split('');
  for(let i = 0; i < arr2.length; i++){
    if(arr2[i] === ' ') continue;
      arr2[i] = arr2[i].toUpperCase();
      arr.push(arr2.join(''));
      arr2[i]= arr2[i].toLowerCase();
    }
  return arr;
}
```
*Job Matching #1*
https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
```javascript
function match(candidate, job) {
  if(candidate.minSalary === undefined || job.maxSalary === undefined){
    throw 'Error';
  }
  if((candidate.minSalary - candidate.minSalary * 10 / 100 ) <= job.maxSalary){
    return true;
  } else {
    return false;
  }
}
```
*Tribonacci Sequence*
https://www.codewars.com/kata/tribonacci-sequence/train/javascript
```javascript
function tribonacci(signature,n){
  if(n === 0) return [];
  if(n === 1) return [signature[0]];
  const arr = [];
    arr.push(signature[0],signature[1],signature[2]);
  let s = signature.reduce((a, b) => a + b, 0);
    arr.push(s);
  for(let i = arr.length; i < n; i++){
    arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
  }
    return arr;
}
```
*Get angle between hour and minute hands*
https://www.codewars.com/kata/582f70bcfd25e93719000371/train/javascript
```javascript
function getAngle(t) {
  let arr = t.split(':');
  if (arr.length <= 1) return 'Invalid input';
  if (isNaN(+arr[0]) || arr[0] > 24) return 'Invalid input';
  if (isNaN(+arr[1]) || arr[1] > 59) return 'Invalid input';
  const arr2 = arr.map(el => +el);
  let nH = 360 / 12 / 60; // 0.5 degrees per 1 min hour hand makes 
  let nM = 360 / 60; // 6 degrees per 1 min min hand makes 
  let m = nM * arr2[1];
  let h = 0;
  if (arr2[0] >= 12) {
    arr2[0] = arr2[0] - 12;
  }
  if (arr2[0] === 0 || arr2[0] === 12) {
    h = 0;
  }
  if (arr2[1] === 60) {
    m = 0;
  }
  h = (arr2[0] * 60 + arr2[1]) * nH;
  let res = Math.abs(h - m);
  if(res > 180){
    res = 360 - res;
  }
  return res;
}
```
*Count the smiley faces!*
https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
```javascript
function countSmileys(arr) {
let count = 0;
  for(let i = 0; i < arr.length; i++){
    if (/(\:|\;)(\~|\-|)(\)|[D])/.test(arr[i])){
      count++;
    }
  }
  return count;
}
```
*The Office II - Boredom Score*
https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript
```javascript
function boredom(staff){
  const boredomScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  } 
  let res = Object.values(staff).map(el => boredomScore[el]).reduce((acc, curr) => acc + curr, 0);
  if(res <= 80) {
    return 'kill me now';
  } else if (res < 100){
    return 'i can handle this';
  } else {
  return 'party time!!';
  }
}
```
*Reverse words*
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
```javascript
function reverseWords(str) {
  const arr = str.split(' ');
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split('').reverse().join('');
  }
  return arr.join(' ');
}
```
*Convert the score*
https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/train/javascript
```javascript
function scoreboard(str) {
  let num = {
    'nil': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5, 
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
    };
    const arr = str.split(' ');
    const arr2 = arr.map(el => num[el]).filter(el => typeof el === 'number');
    return arr2;
}
```
*Player Contact Manager*
https://www.codewars.com/kata/5b203de891c7469b520000b4/train/javascript
```javascript
function playerManager(players) {
  if (players === '' || !players) return [];
  const arr = [];
  const arr2 = players.split(',');
  for (let i = 0; i < arr2.length; i = i + 2) {
     arr.push({player: arr2[i].trim(), contact: +arr2[i + 1]});
  }
  return arr;
}
```
*Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer*
https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript
```javascript
function getFirstPython(list) {
  for(let i = 0; i < list.length; i++){
    if(list[i].language === 'Python'){
      return list[i].firstName + ', ' + list[i].country;
    }      
  }
  return 'There will be no Python developers';
}
```
*Sums of Parts*
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
```javascript
function partsSums(ls) {
  const arr = [];
  let num = ls.reduce((acc, curr) => acc + curr, 0);
  arr.push(num);
  ls.reverse();
  let n = ls.length;
  for (let i = 0; i < n; i++) {
    num = num - ls.pop();
    arr.push(num);
  }
  return arr;
}
```
*Descending Order*
https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
```javascript
function descendingOrder(n){
  let res = n.toString().split('').map(el => +el).sort((a, b) => b - a).join('');
  return +res;
}
```
*FIXME: Get Full Name*
https://www.codewars.com/kata/597c684822bc9388f600010f/train/javascript
```javascript
class Dinglemouse{
  constructor( firstName, lastName ){
    this.firstName =firstName;
    this.lastName =lastName;
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`.trim();
  } 
}
```
*Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?*
https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript
```javascript
function isRubyComing(list) {
  return list.find(el => el.language === 'Ruby') ? true : false;
}
```
*Highest Scoring Word*
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
```javascript
function high(x) {
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  const word = x.split(' ');
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    let el = 0;
    for (let j = 0; j < word[i].length; j++) {
      el += alph.indexOf(word[i][j]);
    }
    arr.push(el)
  }
  let max = arr[0];
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  index = arr.indexOf(max);
  return word[index];
}
```
*Credit Card Mask*
https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
```javascript
function maskify(cc) {
  const arr = cc.split('');
  for(let i = 0; i < arr.length - 4; i++){
    arr[i] = '#';
  }
  return arr.join('');
  }
```
*Credit Card Mask*
https://www.codewars.com/kata/credit-card-mask/train/javascript
```javascript
function maskify(cc) {
  if(cc.length <= 4) return cc;
  return cc.slice(0, cc.length - 4).replace(/\w/g, '#') + cc.slice(-4);
}
```
*https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript*
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
```javascript
function sumDigPow(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    let sum = 0;
    for (let j = 0; j <= i.toString().length; j++) {
      sum += Math.pow(parseInt(i.toString()[j]), j + 1);  
      if (sum === i) arr.push(i);
    }
  }
  return arr;
}
```
*Statistics for an Athletic Association*
https://www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript
```javascript
function stat(str) {
  if (str === '') {
    return '';
  }
  const strArr = str.split(',').map(el => el.split('|').map(elem => +elem));
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][2] + strArr[i][1] * 60 + strArr[i][0] * 60 * 60;
  }
  let sortedArr = strArr.sort((a, b) => a - b);
  let range = sortedArr[sortedArr.length - 1] - sortedArr[0];
  function getRes(res) {
    let sec = Math.trunc(res % 60);
    if (sec < 10) {
      sec = '0' + sec;
    }
    let fullMin = (res - sec) / 60;
    let min = Math.trunc(fullMin % 60);
    if (min < 10) {
      min = '0' + min;
    }
    let h = Math.trunc((fullMin - min) / 60);
    if (h < 10) {
      h = '0' + h;
    }
    return h + '|' + min + '|' + sec;
  }
  let average = sortedArr.reduce((acc, curr) => acc + curr, 0) / sortedArr.length;
  let median = 0;
  let index = 0;
  if (sortedArr.length % 2 === 1) {
    index = Math.floor(sortedArr.length / 2);
    median = sortedArr[index];
  } else {
    index = sortedArr.length / 2
    median = (sortedArr[index] + sortedArr[index - 1]) / 2;
  }
  return 'Range: ' + getRes(range) + ' Average: ' + getRes(average) + ' Median: ' + getRes(median); // your code
}
```
*Growth of a Population*
https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
```javascript
function nbYear(p0, percent, aug, p) {
  let count = 0;
  let sum = p0;
  while (sum <= p) {
    sum += sum * (percent / 100) + aug;
    count++;
    if (sum >= p) break;
  }
  return count;
}
```
*Coding Meetup #11 - Higher-Order Functions Series - Find the average age*
https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript
```javascript
function getAverageAge(list) {
  let aver = list.map(el => el.age).reduce((acc, curr) => acc + curr, 0) / list.length;
  return Math.round(aver);
}
```
*Complementary DNA*
https://www.codewars.com/kata/complementary-dna/train/javascript
```javascript
function DNAStrand(dna){
   let obj = {
     'A': 'T',
     'T': 'A',
     'C': 'G',
     'G': 'C'
   };
   return dna.split('').map(el => obj[el]).join('');
}
```
*You're a square!*
https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
```javascript
var isSquare = function(n){
  if(n < 0) return false;
  let num = Math.sqrt(n);
  if(Number.isInteger(num)){
    return true;
  } else {
    return false;
  }
}
```
*Exes and Ohs*
https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
```javascript
function XO(str) {
  let x = 0;
  let o = 0;
  for(let i = 0; i < str.length; i++){
    str = str.toLowerCase();
  if(str[i] === 'x') x++;
  if(str[i] === 'o') o++;
  }
  return x === o;
}
```
*Isograms*
https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
```javascript
function isIsogram(str){
  if(str === '') return true;
    str = str.toLowerCase();
  for(let i = 0; i < str.length; i++){
    if(str.includes(str[i], i + 1)){
      return false;
    }
  }
  return true;
}
```
*Binary Addition*
https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
```javascript
function addBinary(a,b) {
  return (a + b).toString(2).toString();
}
```
*Printer Errors*
https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
```javascript
function printerError(s) {
  let count = 0;
  let alph = 'nopqrstuvwxyz';
  for(let i = 0; i < s.length; i++){
    if(alph.includes(s[i])) count++;
  }
  return `${count}/${s.length}`;
}
```
*Does my number look big in this?*
https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
```javascript
function narcissistic(value) {
  const arr = value.toString().split('').map(el => +el);
  let res = arr.map(el => Math.pow(el, arr.length)).reduce((acc, curr) => acc + curr, 0);
  return res === value;
}
```
*String incrementer*
https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
```javascript
function incrementString (str) {
let res;
  let index = str.search(/[0-9]/);
  if(index === -1){
    return str + '1';
    }
  let num = +(str.slice(index, str.length)) + 1;
      res = str.slice(0, index) + num;
  if(res.length < str.length){
    res = str.slice(0, index) + '0'.repeat(str.length - res.length) + num;
  }
  return res;
}
```
*Reversing Words in a String*
https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript
```javascript
function reverse(str){
  return str.split(' ').reverse().join(' ');  
}
```
*Sum of the first nth term of Series*
https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
```javascript
function SeriesSum(n){
  let res = 0;
  for(let i = 0; i < n; i++){
    res +=  1 / (i * 3 + 1);
  }
  return res.toFixed(2).toString(); 
}
```
*Is this a triangle?*
https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
```javascript
function isTriangle(a,b,c){
  if(a + b > c && a + c > b && b + c > a){
    return true;
  }
   return false;
}
```
*Don't give me five!*
https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
```javascript
function dontGiveMeFive(start, end){
  let count = 0;
  for(let i = start; i <= end; i++){
    if(i.toString().includes('5')){
      count -= 1;
    }
    count++;
  }
  return count;
}
```
*Breaking chocolate problem*
https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript
```javascript
function breakChocolate(n,m) {
  if(n === 0 || m === 0|| n=== 0 && m === 0){
    return 0;
  }
  return (n * m) - 1;
}
```
*Multi-tap Keypad Text Entry on an Old Mobile Phone*
https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript
```javascript
function presses(phrase) {
  let str1 = 'adgjmptw *#1';
  let str2 = 'behknqux0';
  let str3 = 'cfilorvy';
  let str4 = 'sz234568';
  let str5 = '79'
  let sum = 0;
  const arr = phrase.toLowerCase().split('');
  for(let i = 0; i < arr.length; i++){
    if(str1.includes(arr[i])){
      sum += 1;
    }
    if(str2.includes(arr[i])){
      sum += 2;
    }
    if(str3.includes(arr[i])){
      sum += 3;
    }
    if(str4.includes(arr[i])){
      sum += 4;
    }
    if(str5.includes(arr[i])){
      sum += 5;
    }
    }
    return sum;
}
```
*Welcome!*
https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
```javascript
function greet(language) {
  let keys = Object.keys(dataBase);
  if(keys.includes(language)){
    return dataBase[language];
  } else{
    return dataBase.english;
  }
}

  const dataBase = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  };
```
*Find the middle element*
https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
```javascript
var gimme = function (inputArray) {
  const arr = [...inputArray].sort((a, b) => a - b);
  return inputArray.indexOf(arr[1]);
};
```
*altERnaTIng cAsE <=> ALTerNAtiNG CaSe*
https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
```javascript
String.prototype.toAlternatingCase = function () {
  let alternatedCase = '';
  for(let i = 0; i < this.length; i++){
    if(this[i] === this[i].toLowerCase()){
      alternatedCase += this[i].toUpperCase();
    } else {
    alternatedCase += this[i].toLowerCase();
    }
  }
  return alternatedCase;
}
```
*Replace With Alphabet Position*
https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
```javascript
function alphabetPosition(text) {
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let num = [];
  for(let i = 0; i < text.length; i++){
    text = text.toLowerCase();
  if(alph.indexOf(text[i]) === -1) continue;
    num.push(alph.indexOf(text[i]) + 1);
  }
  return num.join(' ');
}
```
*The Office V - Find a Chair*
https://www.codewars.com/kata/the-office-v-find-a-chair/train/javascript
```javascript
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
```
*Find the stray number*
https://www.codewars.com/kata/find-the-stray-number/train/javascript
```javascript
function stray(num) {
  let res = +num.filter((el, i) => i === num.indexOf(el) && i === num.lastIndexOf(el)).join('')
  return res;
}
```
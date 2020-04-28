# Hello! 
## Nice to meet you here! 


https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript
```javascript
function sumStrings(a,b) { 
  return (+a >= Number.MAX_SAFE_INTEGER || +b >= Number.MAX_SAFE_INTEGER) ? 
    bigInt(a,b) : (a * 1 + b * 1) + '';
  function bigInt(a,b){
    let res = '';
    let num = 0;
    let arr = new Array((Math.abs(a.length - b.length)) + 1).join('0');
      a.length >= b.length ? b = arr + b : a = arr + a;
    for(let i = b.length - 1; i >= 0; i--){
      let sum = a[i] * 1 + b[i] * 1 + num;
      if(sum >= 10){
        sum = sum - 10;
        num = 1;
      } else {
        num = 0;
      }
        res = sum.toString() + res;
      }
      return num > 0 ? num + res : res;
    }
}
```
*Adding Big Numbers*
https://www.codewars.com/kata/adding-big-numbers/train/javascript
```javascript
function add(a, b) {
  return (Number(a) >= Number.MAX_SAFE_INTEGER || Number(b)>= Number.MAX_SAFE_INTEGER) ? 
    bigInt(a, b) : (a * 1 + b * 1) + '';
  function bigInt(a, b){
  let res = '';
  let num = 0;
  let beginnig = new Array((Math.abs(a.length - b.length)+ 1)).join('0');
    a.length >= b.length ? b = beginnig + b : a = beginnig + a;
  for(let i = a.length - 1; i >= 0; i--){
    let sum = a[i] * 1 + b[i] * 1 + num;
    if(sum >= 10){
      sum = sum - 10;
      num = 1;
    } else {
      num = 0;
    }
      res = sum.toString() + res;
    }
    return num > 0 ? num + res : res;
  }
}
```
*Sort Out The Men From Boys*
https://www.codewars.com/kata/sort-out-the-men-from-boys-1/train/javascript
```javascript
function menFromBoys(arr){
  arr = arr.filter((el, i) => i === arr.lastIndexOf(el));
  let even = arr.filter(el => Math.abs(el) % 2 === 0).sort((a, b) => a - b);
  let odd = arr.filter(el =>  Math.abs(el) % 2 === 1).sort((a, b) => b - a);
  return even.concat(odd);
}
```
*Debug Sum of Digits of a Number*
https://www.codewars.com/kata/debug-sum-of-digits-of-a-number/train/javascript
```javascript
function getSumOfDigits(int) {
  return int.toString().split('').reduce((a, b) => a + +b, 0);
}
```
*Sum of a Sequence [Hard-Core Version]*
https://www.codewars.com/kata/sum-of-a-sequence-hard-core-version/train/javascript
```javascript
const sequenceSum = (begin, end, step) => {
  if((begin < end && step <= 0) || (begin > end && step >= 0)) return 0;
    let n = Math.floor((end - begin + step)/step);// amount of numbers in progression
  return n * (2 * begin + (n - 1) * step) / 2;// formula of arithmetic progression
};
```

*Sum of a Beach*
https://www.codewars.com/kata/sum-of-a-beach/train/javascript
```javascript
function sumOfABeach(beach) {
  let count = 0; 
    beach = beach.toLowerCase();
  if(beach.includes('sand')){
    count += beach.split('sand').length - 1;
  }
  if(beach.includes('water')){
    count += beach.split('water').length - 1;
  } 
  if(beach.includes('fish')){
    count += beach.split('fish').length - 1;
  }  
  if(beach.includes('sun')){
    count += beach.split('sun').length - 1;
  }
  return count;
}
```
*Kebabize*
https://www.codewars.com/kata/kebabize/train/javascript
```javascript
function kebabize(str) {
  str = str.replace(/[0-9]/g, '').split('');
  for (let i = 0; i < str.length; i++){
    if(str[0] === str[i].toUpperCase()){
      str[0] = str[0].toLowerCase();
    }
    if(str[i] === str[i].toUpperCase()){
      str.splice(i, 1, `-${str[i].toLowerCase()}`);
    }
  }
  return str.join('');
}
```
*Consonant value*
https://www.codewars.com/kata/kebabize/train/javascript
```javascript
function solve(s) {
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let arr = [];
    s = s.replace(/[aeuio]/g, ' ').split(' ');
    for(let i = 0; i < s.length; i++){
      let sum = 0;
        for(let j = 0; j < s[i].length; j++){
          sum += alph.indexOf(s[i][j]) + 1;
            arr.push(sum)
        }
    }
  return Math.max(...arr);
}
```
*If you can read this...*
https://www.codewars.com/kata/if-you-can-read-this-dot-dot-dot/train/javascript
```javascript
function to_nato(words) {
  const obj = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "Xray",
    "Y": "Yankee",
    "Z": "Zulu",
    '.': '.',
    '!': '!',
    '?': '?',
    ' ' : ' '
  }
    let arr = words.toUpperCase().split('').map(el => el = obj[el]);
  return arr.join(' ').replace(/\s+/g, ' ');
}
```
*Putting the flatMap into the JS*
https://www.codewars.com/kata/5abb8e941ea65df9870000a9/train/javascript
```javascript
Array.prototype.flatMap = function(f) {
  return this.reduce((a, b) => a.concat(f(b)), []);
}
```
*Transform To Prime*
https://www.codewars.com/kata/transform-to-prime/train/javascript
```javascript
function minimumNumber(numbers){
  const arrPrimes = [1];
    nextPrime:
      for(let i = 2; i <= 41000; i++){
        for(let j = 2; j < Math.sqrt(i); j++){
          if(i % j === 0) continue nextPrime;
          }
            arrPrimes.push(i);
        }
          let sum = numbers.reduce((a, b) => a + b, 0);
              arrPrimes.push(sum);
              arrPrimes.sort((a, b) => a - b);
              let prime = arrPrimes.indexOf(sum) + 1;
              let res = arrPrimes[prime] - sum;
        return res;
}
```
*2 version*
```javascript
function minimumNumber(numbers){
  let sum = numbers.reduce((a, b) => a + b, 0);
  let newSum = sum;
  while(isPrime(newSum) === false){
    newSum++;
  }
 return newSum - sum;
}

function isPrime(num){
    for(let i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }
    }
  return true;
}
```
*Well of Ideas - Harder Version*
https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript
```javascript
function well(x){
  let count = 0;
    for(let i = 0; i < x.length; i++){
      for(let j = 0; j < x[i].length; j++){ 
      if(typeof x[i][j] === 'string' && x[i][j].toLowerCase() === 'good') count ++;
      }
    }
    if(count === 0) return 'Fail!';
    if(count <= 2) return 'Publish!';
    if(count > 2) return 'I smell a series!';
}
```
*Schrödinger's Boolean*
https://www.codewars.com/kata/schrodingers-boolean/train/javascript
```javascript
const omnibool = {
  i: 1,
  toString: function() {
    return this.i--;
  }
};
```
*See You Next Happy Year*
https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript
```javascript
function nextHappyYear(year){
  let res = year;
  for(let i = year; ; i++){
    res++;
    let a = res.toString().split('').map(el => +el);
      if(a[0] !== a[1] && a[0] !== a[2] && a[0] !== a[3] && a[1] !== a[2] && a[1] !== a[3] && a[2] !== a[3]){
        return +a.join('');
      }
   }
}
```
*Find the missing term in an Arithmetic Progression*
https://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression/train/javascript
```javascript
var findMissing = function(list) {
  let res1 = list[1] - list[0];
  let res2 = list[list.length - 1] - list[list.length - 2];
  for (let i = 1; i <= list.length + 1; i++) {
    if (!list.includes(list[0] + i * res1)) {
      return list[0] + i * res1;
    } else if (!list.includes(list[0] + i * res2)) {
      return list[0] + i * res2;
    }
  }
}
```

*Simple Fun #176: Reverse Letter*
https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
```javascript
function reverseLetter(str) {
  str = str.replace(/[^a-z]/gi, '').split('').reverse().join('');
  return str;
}
```
*Factorial*
https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
```javascript
function factorial(n){
  if(n === 0 || n === 1) return 1;
  if(n < 0 || n > 12) throw 'RangeError';
  let fact = 1;
  for(let i = 1; i <= n; i++){
    fact *= i;
  }
  return fact;
}
```
*Find divisors of a number*
https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
```javascript
function getDivisorsCnt(n){
   let count = 0;
   for(let i = 1; i <= n; i++){
     if(n % i === 0) count++;
   }
   return count;
}
```

*Count characters in your string*
https://www.codewars.com/kata/count-characters-in-your-string/train/javascript
```javascript
function count (str) {
  if(str === '') return {};
  const obj = {};
  let amountOfA = str.split('').filter(el => el === 'a').length;
  let amountOfB = str.length - amountOfA;
  if(amountOfA > 0){
    obj.a = amountOfA;
  }
  if(amountOfB > 0){
    obj.b = amountOfB;
  }
return obj;
}
```
*Break camelCase*
https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
```javascript
function solution(str) {
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i].toUpperCase()){
      arr[i] = ' ' + arr[i];
    }
  }
  return arr.join('');
}
```
*Srot the inner ctonnet in dsnnieedcg oredr*
https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/javascript
```javascript
function sortTheInnerContent(words){
  let arr = words.split(' ');
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 3){
      let word = arr[i][0] + arr[i].slice(1, arr[i].length - 1).split('').sort().reverse().join('') + arr[i][arr[i].length - 1];
      arr[i] = word;
    }
  }
  return arr.join(' ');
}
```
*Valid Parentheses*
https://www.codewars.com/kata/valid-parentheses/train/javascript
```javascript
function validParentheses(parens){
  let sum = 0;
  for(let i = 0; i < parens.length; i++){
    if(parens[i] === '(') sum++;
    if(parens[i] === ')') sum--;
    if(sum < 0) return false;
    }
if(sum === 0) return true;
if(sum !== 0) return false;
}
```
*Braces status*
https://www.codewars.com/kata/braces-status/train/javascript
```javascript
function bracesStatus(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      arr.push(str[i]);
    } else if (arr.includes('(') && str[i] === ')') {
      arr.pop();
    } else if (!arr.includes('(') && str[i] === ')') {
      return false;
    }
    if (str[i] === '[') {
      arr.push(str[i]);
    } else if (arr.includes('[') && str[i] === ']') {
      arr.pop();
    } else if (!arr.includes('[') && str[i] === ']') {
      return false;
    }
    if (str[i] === '{') {
      arr.push(str[i]);
    } else if (arr.includes('{') && str[i] === '}') {
      arr.pop();
    } else if (!arr.includes('{') && str[i] === '}') {
      return false;
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}
```
*2 version*
```javascript
function bracesStatus(str){
  const arr = [];
  if (typeof str !== 'string') {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      arr.push(str[i]);
    } else if (str[i] === ')') {
      let p = arr.pop();
      if (p !== '(') {
        return false;
      }
    } else if (str[i] === ']') {
      let p = arr.pop();
      if (p !== '[') {
        return false;
      }
    } else if (str[i] === '}') {
      let p = arr.pop();
      if (p !== '{') {
        return false;
      }
    }
  }
  if(arr.length > 0){
    return false;
  }
  return true;
}
```
*Valid Braces*
https://www.codewars.com/kata/valid-braces/train/javascript
```javascript
function validBraces(b){
  const arr = [];
  for(let i = 0; i < b.length; i++){
    if(b[i] === '(' || b[i] === '{' || b[i] === '['){
      arr.push(b[i]);
    }
    if(b[i] === ')'){
      let r = arr.pop();
      if(r !== '(') return false;
    }
    if(b[i] === '}'){
      let r = arr.pop();
      if(r !== '{') return false;
    }
    if(b[i] === ']'){
      let r = arr.pop();
      if(r !== '[') return false;
    }
  }
    return arr.length === 0;
}
```
*Primorial Of a Number*
https://www.codewars.com/kata/primorial-of-a-number/train/javascript
```javascript
function numPrimorial(n){
  const arr = [];
  nextPrime:
  for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
      arr.push(i);
  }
  let res = arr.slice(0, n).reduce((a, b) => a * b, 1);
  return res;
}
```
*2 version*
```javascript
function isPrime(num){
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
    return true;
}

function numPrimorial(n){
  const res = [];
  let j = 2;
  while(res.length < n){
    if(isPrime(j)){
      res.push(j);
    }
      j++;
    }
  return res.reduce((a, b) => a * b, 1);  
}
```
*Array Helpers*
https://www.codewars.com/kata/array-helpers/train/javascript
```javascript
Array.prototype.square = function () {
return this.map(el => el ** 2); 
} 
Array.prototype.cube = function () { 
return this.map(el => el ** 3); 
} 
Array.prototype.sum = function () { 
return this.reduce((a,b) => a + b, 0 ); 
} 
Array.prototype.average = function () { 
return this.length === 0 ? NaN : this.reduce((a,b) => a + b, 0 )/this.length;
} 
Array.prototype.even = function () { 
return this.filter(a => a % 2 === 0); 
} 
Array.prototype.odd = function () { 
return this.filter(a => a % 2 === 1); 
}
```
*Array Deep Count*
https://www.codewars.com/kata/array-deep-count/train/javascript
```javascript
function deepCount(a){
  return a.reduce((s,e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}
```
*Where is my parent!?(cry)*
https://www.codewars.com/kata/where-is-my-parent-cry/train/javascript
```javascript
function findChildren(d){
  let res = '';
  let arr = d.split('').sort();
  const arrP = arr.filter(el => el === el.toUpperCase());
  const arrC = arr.filter(el => el === el.toLowerCase());
  for(let i = 0; i < arrP.length; i++){
    res += arrP[i];
    for(let j = 0; j < arrC.length; j++){
      if(arrP[i].toLowerCase() === arrC[j]){
        res += arrC[j];
      }
    }
  }
  return res;
}
```
*Regexp Basics - is it IPv4 address?*
https://www.codewars.com/kata/regexp-basics-is-it-ipv4-address/train/javascript
```javascript
String.prototype.ipv4Address=function(){
  if(this.match(/^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/)){
    return true;
  }
    return false;
}
```
*Exclamation marks series #17: Put the exclamation marks and question marks to the balance, Are they balanced?*
https://www.codewars.com/kata/exclamation-marks-series-number-17-put-the-exclamation-marks-and-question-marks-to-the-balance-are-they-balanced/train/javascript
```javascript
function balance(left, right) {
  let countL = 0;
  let countR = 0;
  for (let i = 0; i < left.length || i < right.length; i++) {
    if (left[i] === '!') {
      countL += 2;
    }
    if (left[i] === '?') {
      countL += 3;
    }
    if (right[i] === '!') {
      countR += 2;
    }
    if (right[i] === '?') {
      countR += 3;
    }
  }
  if (countL === countR) return 'Balance';
  if (countL < countR) return 'Right';
  if (countL > countR) return 'Left';
}
```
*Simple reversed parenthesis*
https://www.codewars.com/kata/simple-reversed-parenthesis/train/javascript
```javascript
function solve(s){
  while(s.includes('()')){
    s = s.replace(/\(\)/g, '');
  }
  if(s.length % 2 !== 0) return -1;
    let count = 0;
    let arr = [')(', '((', '))'];
    for(let i = 0; i < s.length; i += 2){
      if(s[i] + s[i + 1] === arr[0]) count +=2;
      if(s[i] + s[i + 1] === arr[1]) count +=1;
      if(s[i] + s[i + 1] === arr[2]) count +=1;
}
  return count;
}
```
*Write Number in Expanded Form*
https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript
```javascript
function expandedForm(num) {
  let str = [];
  num = num.toString().split('');
  for(let i = 0; i < num.length; i++){
    if(num[i] !== '0' && i !== num.length - 1){
      str.push(num[i] + '0'.repeat(num.length - i - 1));
    } else if (num[i] === num[num.length - 1] && num[num.length - 1] !== '0'){
      str.push(num[i]);
    }
  }
  return str.join(' + ');
}
```
*Write Number in Expanded Form - Part 2*
https://www.codewars.com/kata/write-number-in-expanded-form-part-2/train/javascript
```javascript
function expandedForm(num) {
  num = num.toString().split('.');
  const arr = [];
  for(let i = 0; i < num[0].length; i++){
    if(num[0][i] !== '0'){
      arr.push(+num[0][i] * 10 ** (num[0].length - 1 - i));
    } 
  }
  for(let i = 0; i < num[1].length; i++){
    if(num[1][i] !== '0'){
      arr.push(num[1][i] +'/'+ (10 ** (i + 1)));
    }
  }
    return arr.join(' + ');
}
```
*Organise duplicate numbers in list*
https://www.codewars.com/kata/organise-duplicate-numbers-in-list/train/javascript
```javascript
function group(arr) {
  let res = [];
  let arr2 = [...new Set(arr)];
  for(let i = 0; i < arr2.length; i++){
    let num = arr.filter(el => el === arr2[i]);
    if(!res.includes(num)){
      res.push(num);
    }
  }
  return res;
}
```
*Recursion #1 - Factorial*
https://www.codewars.com/kata/recursion-number-1-factorial/train/javascript
```javascript
const factorial = n => {
  if(n === 0) return 1;
  if(n > 0){
    return n * factorial(n - 1);
  }
};
```
*Recursion #2 - Fibonacci*
https://www.codewars.com/kata/569512b7707bc1b88200002f/train/javascript
```javascript
const fibonacci = n => {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
```
*Fibonacci Generator Function*
https://www.codewars.com/kata/58a5d9aaa49f6cd0f9000ad7/train/javascript
```javascript
function* fibonacci(fn1 = 1, fn2 = 0, current = 0) {
  while (true) {
    [current, fn2, fn1] = [fn2, fn1, fn1 + fn2];
    yield current;
  }
}
```
*Fibonacci Reloaded*
https://www.codewars.com/kata/52549d3e19453df56f0000fe/train/javascript
```javascript
function fib(n) {
   const arr = [0, 1];
   if(n === 1) return 0;
   if(n === 2) return 1;
   for(let i = 2; i < n; i++){
     let num = arr[i - 1] + arr[i- 2];
       arr.push(num);
   }
   return arr[arr.length - 1];
}
```
*Encrypt this!*
https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
```javascript
var encryptThis = function(text) {
  const arr = text.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      arr[i] = arr[i].split('');
      let temp = arr[i][1];
      arr[i][1] = arr[i][arr[i].length - 1];
      arr[i][arr[i].length - 1] = temp;
      arr[i] = arr[i].join('');
      arr[i] = arr[i][0].charCodeAt(0) + arr[i].slice(1);
    } else {
      arr[i] = arr[i][0].charCodeAt(0);
    }
  }
  return arr.join(' ');
}
```
*Memesorting*
https://www.codewars.com/kata/memesorting/train/javascript
```javascript
const memesorting = meme => {

  switch ([...meme].reverse().join('').match(/.*(g.*u.*b|m.*o.*o.*b|s.*t.*i.*d.*e|^)/i)[1].charAt(0).toLowerCase()) {
    case 's': return 'Danik';
    case 'g': return 'Roma';
    case 'm': return 'Maxim';
    default: return 'Vlad';
  }
}
```
*Days in the year*
https://www.youtube.com/watch?v=ZoOZfePzsmc
```javascript
const yearDays = year =>
  `${year} has ${
    (!(year % 100) && year % 400) || year % 4 ? '365' : '366'
  } days`;
```
*Minimum Steps (Array Series #6)*
https://www.codewars.com/kata/minimum-steps-array-series-number-6/train/javascript
```javascript
function minimumSteps(num, val){
let sum = 0;
let steps = 0;
  num = num.sort((a, b) => a -b);
  for(let i = 0; i < num.length; i++){
  sum += num[i];
  steps++;
  if(sum >= val) return steps - 1;
  }
}
```
*Baby shark lyrics generator*
https://www.codewars.com/kata/baby-shark-lyrics-generator/train/javascript
```javascript
const babySharkLyrics = () => {
  const fish = ['Baby shark','Mommy shark','Daddy shark','Grandma shark','Grandpa shark',"Let's go hunt"];
  let l = '';
  let s =' doo'.repeat(6);
  fish.map(f => {
    l +=`${f},${s}\n`.repeat(3)+`${f}!\n`;
  })
  l += 'Run away,…';
  return l;
}
```
*Money, Money, Money*
https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
```javascript
function calculateYears(p, int, tax, d) {
  if(p === d) return 0;
  let y = 0;
  while(p < d){
    p += (p * int)  - (p * int * tax);
    ++y;
  }
  return y;
}
```
*Dashatize it*
https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
```javascript
function dashatize(num) {
  if(num < 0){
    num = num * (-1);
    if(num <= 9) return num.toString();
  }
  if(num <= 9) return num.toString();
  const arr = num.toString().split('');
  for(let i = 0; i < arr.length; i++){
    if(+arr[i] % 2 === 1 && arr[i] !== arr[0] && arr[i] !== arr[arr.length - 1]){
      arr[i] = '-' + arr[i] + '-';
    } else if(+arr[i] % 2 === 1  && arr[i] === arr[0]){
      arr[i] = arr[i] + '-';
    } else if(+arr[i] % 2 === 1 && arr[i] === arr[arr.length - 1]){
      arr[i] = '-' + arr[i];
    }
  }
  return arr.join('').replace(/\-+/g, '-');
}
```
*2 case*
```javascript
function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/\-+/g, "-")
    .replace(/(^-|-$)/g, "")
}
```
*Three added Characters*
https://www.codewars.com/kata/three-added-characters/train/javascript
```javascript
function addedChar(s1, s2){
  s1 = s1.split('').sort();
  s2 = s2.split('').sort();
  for(let i = 0; i < s2.length; i++){
    if(s2[i] !== s1[i]){
    return s2[i];
    }
  }
}
```
*Banker's Plan*
https://www.codewars.com/kata/56445c4755d0e45b8c00010a/train/javascript
```javascript
function fortune(f0, p, c0, n, i) {
  let j = 1;
  let sum = f0;
  let withdraw = c0;
  while (j < n){
    sum = Math.ceil(sum + (p/100 * sum) - withdraw);
    withdraw = Math.ceil(withdraw + (withdraw * i/100));
    j++;
  }
  return sum >= 0 ;
}
```
*Grouped by commas*
https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript
```javascript
function groupByCommas(n) {
  if(n < 1000) return n.toString();
    n = n.toString().split('').reverse();
  for(let i = 3; i < n.length; i = i + 3){
    n[i] = n[i] + ',';
  }
  return n.reverse().join('');
}
```
*Selective Array Reversing*
https://www.codewars.com/kata/selective-array-reversing/train/javascript
```javascript
function selReverse(array, length) {
  if (length == 0) return array;
  let result = [];
  for(let i = 0; i < array.length; i += length) {
    result.push(...array.slice(i, i+length).reverse());
  }
  return result;
}
```
*Simple Fun #79: Delete a Digit*
https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript
```javascript
function deleteDigit(n) {
  let arr = n.toString().split('');
  let arr2 = [];
  for(let i = 0; i < arr.length; i++){
    let temp = arr[i];
    arr[i] = '';
    arr2.push(arr.filter(el => el !== '').join(''));
    arr[i] = temp;
  }
    arr2 = arr2.map(el => +el)
  return Math.max(...arr2);
}
```
*Driving Licence*
https://www.codewars.com/kata/586a1af1c66d18ad81000134/train/javascript
```javascript
function driver(data) {
  const months = [0, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let res = '';
  if (data[2].length >= 5) {
    data[2] = data[2].slice(0, 5);
  } else {
    let num = 5 - data[2].length;
    data[2] = data[2] + '9'.repeat(num);
  }
  res += data[2].toUpperCase();
  let dayOb = data[3].slice(0, 2);
  let yearOb = data[3].slice(-4);
  let dOb = data[3].slice(2, data[3].length - 4);
  for (let i = 1; i <= months.length; i++) {
    if (dOb.includes(months[i])) {
      let index = months.indexOf(months[i]);
      if (index < 10) {
        index = '0' + index;
      }
      dOb = dOb.replace(/\-[a-zA-z]/gi, index).slice(0, 2)
    }
  }
  res += yearOb.slice(-2, -1);
  if (data[4] === 'M') {
    res += dOb;
  } else {
    res += +dOb + 50;
  }
  res += dayOb + yearOb[yearOb.length - 1];
  res += data[0].slice(0, 1);
  if (data[1] === '') {
    data[1] = '9';
  }
  res += data[1].slice(0, 1);
  res += '9AA';
  return res;
}
```
*Loose Change*
https://www.codewars.com/kata/5571f712ddf00b54420000ee/train/javascript
```javascript
function looseChange(cents) {
  const obj = {
    'Nickels': 0,
    'Pennies': 0,
    'Dimes': 0,
    'Quarters': 0
  };
  if (cents <= 0) return obj;
  let q = 25;
  let d = 10;
  let n = 5;
  let p = 1;
  cents = Math.floor(cents);
  obj.Quarters = Math.trunc(cents / q);
  obj.Dimes = Math.trunc((cents - obj.Quarters * 25) / d);
  obj.Nickels = Math.trunc(((cents - obj.Quarters * 25) - (obj.Dimes * 10)) / n);
  obj.Pennies = Math.trunc(((cents - obj.Quarters * 25) - (obj.Dimes * 10) - obj.Nickels * 5) / p);
  return obj;
}
```
*Sorted? yes? no? how?*
https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
```javascript
function isSortedAndHow(arr) {
    if(arr.length === 2 && arr[0] > arr[1] || arr.length > 2 && arr[0] > arr[1] && arr[1] > arr[2]){
      return 'yes, descending';
    } else if (arr.length === 2 && arr[0] < arr[1] || arr.length > 2 && arr[0] < arr[1] && arr[1] < arr[2]){
      return 'yes, ascending';
    } else {
      return 'no';
    }
}
```
*Find the capitals*
https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
```javascript
var capitals = function (word) {
const arr = [];
for(let i = 0; i < word.length; i++){
  if(word[i] === word[i].toUpperCase()){
    arr.push(i);
  }
}
return arr;
};
```
*Count Repeats*
https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/train/javascript
```javascript
function countRepeats(str) {
  const arr = str.split('');
  let s = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== s[s.length - 1]){
    s.push(arr[i]);
    }
  }
  return str.length - s.length;
}
```
*String Breakers*
https://www.codewars.com/kata/59d398bb86a6fdf100000031/train/javascript
```javascript
function stringBreakers(n, str){
  let arr = str.replace(/\s/g, '').split('');
  let res = '';
  for(let i = 0; i < arr.length; i = i + n){
    res = res + arr.slice(i, i + n).join('') + "\n";
  }
  return res.slice(0, -1);
}
```
*Simple remove duplicates*
https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
```javascript
function solve(arr){
    return arr.filter((el, i) => i === arr.lastIndexOf(el));
}
```
*Only Duplicates*
codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript
```javascript
function onlyDuplicates(str) {
  let res = '';
  for(let i = 0; i < str.length; i++){
    if(!(i === str.indexOf(str[i]) && i === str.lastIndexOf(str[i]))){
      res += str[i];
    }
  }
  return res;
}
```
*2 case*
```javascript
function onlyDuplicates(str) {
  let res = '';
  for(let i = 0; i < str.length; i++){
    if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
      res += str[i];
    }
  }
  return res;
}
```
*Case Reversal of Consecutive Duplicates*
https://www.codewars.com/kata/case-reversal-of-consecutive-duplicates/train/javascript
```javascript
function reverseCase(string) {
  let res = '', temp = string[0];
  for (let i = 1; i < string.length; i++)
  {
    if (string[i] === string[i-1])
      temp += string[i];
    else
    {
      if (temp.length > 1)
        temp = temp[0] === temp[0].toUpperCase() ? temp.toLowerCase() : temp.toUpperCase();
      res += temp;
      temp = string[i];
    }
  }
  if (temp.length > 1)
    temp = temp[0] === temp[0].toUpperCase() ? temp.toLowerCase() : temp.toUpperCase();
  return res + temp;
}
```
*2 case*
```javascript
function reverseCase(string) {
  return string.replace(/([a-zA-Z])\1+/g, v => v.toLowerCase() === v ? v.toUpperCase() : v.toLowerCase());
}
```
*Duplicate Arguments*
https://www.codewars.com/kata/duplicate-arguments/train/javascript
```javascript
function solution(...arr){
  return [...new Set(arr)].length !== arr.length;
}
```
*Remove consecutive duplicate words*
https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
```javascript
const removeConsecutiveDuplicates = s => {
  const arr = s.split(' ');
  const arr2 = [];
  for(let i = 0; i < arr.length; i++){
    if(arr2[arr2.length - 1] !== arr[i]){
      arr2.push(arr[i]);
    }
  }
  return arr2.join(' ');
}
```
*Train to remove duplicates from an array with filter()*
https://www.codewars.com/kata/train-to-remove-duplicates-from-an-array-with-filter/train/javascript
```javascript
function unique(arr) {
  return arr.filter((el, i) => i === arr.indexOf(el));
}
```
*Squash the bugs*
https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
```javascript
function findLongest(str){
  const spl = str.split(' ');
  let longest = 0;
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}
```
*Parse nice int from char problem*
https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
```javascript
function getAge(inputString){
  return +inputString.charAt(0);
}
```
*2 case*
```javascript
function getAge(inputString){
  return parseInt(inputString);
}
```
*Multiply characters*
https://www.codewars.com/kata/52e9aa89b5acdd26d3000127/train/javascript
```javascript
function spam(number){
  return "hue".repeat(number);
}
```
*Failed Sort - Bug Fixing #4*
https://www.codewars.com/kata/failed-sort-bug-fixing-number-4/train/javascript
```javascript
var sortArray = function(value) {
  return value.split('').sort().join('');
}
```
*Regex Failure - Bug Fixing #2*
https://www.codewars.com/kata/regex-failure-bug-fixing-number-2/train/javascript
```javascript
function filterWords(phrase){
  return phrase.replace(/bad|mean|ugly|horrible|hideous/gi,'awesome');
}
```
*Range Extraction*
https://www.codewars.com/kata/range-extraction/train/javascript
```javascript
function solution(l) {
  let str = '';
  for (let i = 0; i < l.length; i++) {
    if (l[i] + 1 !== l[i + 1]) {
      str += l[i].toString() + ',';
    } else if (l[i] + 1 === l[i + 1] && l[i + 1] + 1 === l[i + 2] && l[i] - 1 !== l[i - 1]) {
      str += l[i].toString() + '-';
    } else if (str[str.length - 1] === '-' && l[i + 1] !== (l[i] + 1)) {
      str += l[i].toString() + ',';
    } else if ((l[i] - 1) === l[i - 1] && (l[i] + 1) === l[i + 1]) {
      str = str;
    } else {
      str += l[i].toString() + ',';
    }
  }
  return str.slice(0, -1);
}
```
*Array comparator*
https://www.codewars.com/kata/561046a9f629a8aac000001d/train/javascript
```javascript
function matchArrays(v,r){
  let res = 0;
  if(v.length >= r.length){
    for(let i = 0; i < v.length; i++){
      if(v.includes(r[i])) res += 1;
    }
  } else{
    for(let i = 0; i < r.length; i++){
      if(v.includes(r[i])) res += 1;
    }
  }
  return res;
}
```
*String transformer*
https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript
```javascript
function stringTransformer(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      str[i] = str[i].toLowerCase();
    } else {
      str[i] = str[i].toUpperCase();
    }
  }
  str = str.join('');
  let arr = str.split(' ').reverse();
  return arr.join(' ');
}
```
*Tidy Number (Special Numbers Series #9)*
https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
```javascript
function tidyNumber(n){
  n = n.toString().split('');
  for(let i = 0; i < n.length; i++){
    if(n[i] > n[i + 1]) return false;
  }
  return true;
}
```
*Pair of gloves*
https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript
```javascript
function numberOfPairs(gl){
  const obj = {};
  for(let i = 0; i < gl.length; i++){
    obj[gl[i]] = obj[gl[i]] ? ++obj[gl[i]] : 1;
  }
 let numOfPairs = 0;
  const arr = Object.values(obj);
  let res = arr.map(el => el % 2 === 0 ? el / 2 : (el -(el % 2)) / 2).reduce((a, b) => a + b, 0);  
  return res;
}
```


*Multiply array values and filter non-numeric*
https://www.codewars.com/kata/55ed875819ae85ca8b00005c/train/javascript
```javascript
function multiplyAndFilter(arr, mult){
  return arr.filter(el => typeof el === 'number').map(el => el * mult);
}
```
*Arithmetic sequence - sum of n elements*
https://www.codewars.com/kata/55cb0597e12e896ab6000099/train/javascript
```javascript
function ArithmeticSequenceSum(a, r, n) {
 let sum = a;
 for(let i = 2; i <= n; i++){
   sum += a + r * (i - 1);
 }
 return sum;
}
```
*Birthday I - Cake*
https://www.codewars.com/kata/5805ed25c2799821cb000005/train/javascript
```javascript
function cake(x, y){
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let sum = 0;
  for(let i = 0; i < y.length; i++){
    if(i % 2 === 0){
      sum += y[i].charCodeAt(y[0]);
    } else {
      sum += alph.indexOf(y[i]) + 1;
    }
  }
   return x * 0.7 < sum ? 'Fire!' : 'That was close!';
}
```
*Odd Ones Out!*
https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/javascript
```javascript
function oddOnesOut(nums) {
  let arr = [];
  for(let i = 0; i < nums.length; i++){
    let l = nums.filter(el => el === nums[i]);
    if(l.length % 2 === 0){
      arr.push(nums[i]);
    }
  }
  return arr;
}
```
*2 case*
```javascript
function oddOnesOut(nums) {
  return nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
}
```
*Double Sort*
https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript
```javascript
function dbSort(a){
  let arr = a.filter(el => typeof el === 'number').sort((a, b) => a - b).concat(a.filter(el => typeof el === 'string').sort());
  return arr;
}
```
*Smallest value of an array*
https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
```javascript
function min(arr, toReturn) {
  let min = Math.min(...arr);
  if(toReturn === 'value') return min;
  if(toReturn === 'index')return arr.indexOf(min);
}
```
*Alphabetical Sequence*
https://www.codewars.com/kata/5bd00c99dbc73908bb00057a/train/javascript
```javascript
function alphaSeq (str) {
   let alph = '0abcdefghijklmnopqrstuvwxyz';
   let letters = [];
     str = str.toLowerCase().split('').sort();
   for(let i = 0; i < str.length; i++){
     letters.push(str[i].toUpperCase() + str[i].repeat(alph.indexOf(str[i]) - 1));
   }
   return letters.join(',');
}
```
*Highest Rank Number in an Array*
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
```javascript
function highestRank(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  let nums = Object.keys(obj);
  let amount = Object.values(obj);
  let maxA = Math.max(...amount);
  let i = amount.lastIndexOf(maxA);
  return +nums[i];
}
```
*Counting Array Elements*
https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript
```javascript
function count(arr){
   const obj = {};
   for(let i = 0; i < arr.length; i++){
     obj[arr[i]] = obj[arr[i]] ? ++obj[arr[i]] : 1;
   }
   return obj;
}
```
*Row Weights*
https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
```javascript
function rowWeights(arr){
  let res = [0, 0];
  for(let i = 0; i < arr.length; i++){
    if(i % 2 === 0){
      res[0] += arr[i];
    } else {
      res[1] += arr[i];
    }
  }
  return res;
}
```
*Minimize Sum Of Array (Array Series #1)*
https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
```javascript
function minSum(arr) {
  arr.sort((a,b) => a - b);
  let res = 0;
  for(let i = 0; i < arr.length/2; i++){
    res += arr[i] * arr[arr.length - 1 - i];
  }
  return res;
}
```
*Is every value in the array an array?*
https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript
```javascript
const arrCheck = value =>{
if(value.length === 0 && Array.isArray(value)) return true;
if(Array.isArray(value)) {
  for(let i = 0; i < value.length; i++){
    if(!Array.isArray(value[i])) return false;
  }
  return true;
}
}
```
*Small enough? - Beginner*
https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript
```javascript
function smallEnough(a, limit){
  for(let i = 0; i < a.length; i++){
    if(a[i] > limit) return false;
  }
  return true;
}
```
*Help the Fruit Guy*
https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript
```javascript
function removeRotten(bag){
  if(!bag || null) return [];
  bag = bag.map(el => el.includes('rotten') ? el.replace('rotten', '') : el)
  .map(el => el.toLowerCase());
  return bag;
}
```
*My Languages*
https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
```javascript
function myLanguages(res) {
  const arr = [];
  let obj = Object.entries(res).sort((a, b) => b[1] - a[1]);
  for(let i = 0; i < obj.length; i++){
    if(obj[i][1] >= 60) arr.push(obj[i][0]);
  }
  return arr;
}
```
*2 case*
```javascript
function myLanguages(res) {
  return Object.keys(res).filter(el => res[el] >= 60).sort((a,b) => res[b] - res[a]);
}
```
  
  
*Is date a palindrome?*
```javascript
function isPalindrome(d) {
  let res = (d.getMonth() + 1) + '' + d.getDate() + '' + d.getFullYear().toString().slice(2);
  for (let i = 0; i < res.length / 2; i++) {
    if (res[i] !== res[res.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
const date = [new Date(),
  new Date(2019, 8, 10),
  new Date(2019, 8, 11),
  new Date(2019, 8, 12),
  new Date(2019, 8, 13),
  new Date(2019, 8, 14),
  new Date(2019, 8, 15),
  new Date(2019, 8, 16),
  new Date(2019, 8, 17),
  new Date(2019, 8, 18),
  new Date(2019, 8, 19)
]
for (let i = 0; i < date.length; i++) {
  console.log(isPalindrome(date[i]));
}
```
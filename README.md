# Hello! 
## Nice to meet you here! 


**
**

```

**

```
**

```

**

```
***
**

```

**

```
**
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
*Meeting*
https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
```javascript
function meeting(s) {
  let str = s.toUpperCase().replace(/:/g, ',').split(';');
  for(let i = 0; i < str.length; i++){
    str[i] = '(' + str[i].split(',').reverse().join(', ') + ')';
  }
  str = str.sort().join('');
  return str; 
}
```
*Valid Parentheses*
https://www.codewars.com/kata/52774a314c2333f0a7000688/solutions/javascript
```javascript
function validParentheses(parens){
  if(parens === '') return true;
  let res = false;
  if(!parens.includes('(') || !parens.includes(')')){
    return res;
  } else if(parens.match(/\(/g).length === parens.match(/\)/g).length) {
    if(parens.indexOf('(') < parens.indexOf(')') && parens.lastIndexOf('(') < parens.lastIndexOf(')')){ 
      res =  true;
    }
  } 
  return res;
}
```
*Reverse Vowels In A String*
https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript
```javascript
function reverseVowels(str) {  
  let vowel = str.match(/[auioe]/gi);
  if(!vowel) {
    return str;
  } else {
  vowel.reverse();
  }
  const arr = str.split('');
  for(let i = 0; i < str.length; i++){
    if(arr[i].match(/[aeiou]/i)){
      arr[i] = arr[i].replace(/[aeiou]/i, vowel.shift());
    }
  }
 return arr.join('');
}
```
*CamelCase Method*
https://www.codewars.com/kata/camelcase-method/train/javascript
```javascript
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
```
*Count the Digit*
https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
```javascript
function nbDig(n, d) {
  const arr = [];
  let count = 0;
  for(let i = 0; i <= n; i++){
    arr.push(i);
  }
  let num = arr.map(el => (Math.pow(el, 2)).toString());
  for(let i = 0; i < num.length; i++){
    if(num[i].includes(d)){
      count += num[i].split('').filter(el => +el === d).length;
    }
  }
  return count;
}
```
*Find the lucky numbers*
https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript
```javascript
var filterLucky=x=>{
  let res = x.map(el => el.toString());
  let arr = [];
  for(let i = 0; i < res.length; i++){
    if(res[i].includes('7')){
      arr.push(res[i]);
    }
  }
  return arr.map(el => +el);
}
```
*Filter Coffee*
https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript
```javascript
function search(budget, prices) {
  let res  = prices.filter(item => item <= budget).sort((a, b) => a - b);
  return res.join (',');
}
```
*Numerical Palindrome #5*
https://www.codewars.com/kata/numerical-palindrome-number-5-1/train/javascript
```javascript
function palindrome(num) {
  if(num <= 0 || !Number.isInteger(num)) return 'Not valid';
  if(num <= 9) return false;
  const arr = num.toString().split('').sort();
  let count = 0;
  for(let i = 0; i < arr.length - 1; i){
      if(arr[i] === arr[i + 1]){
        count = count + 2;
        i = i + 2;
      } else { 
          i++;
      }
    }
        if(arr.length === count || arr.length === count + 1){
          return true;
        } else {
          return false;
    }
  }
```
*Consecutive strings*
https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
```javascript
function longestConsec(str, k) {
  if (k > str.length || str.length === 0 || k <= 0) return '';
  return str.reduce((max, item, i) => {
  const addWords = str.slice(i, i + k).join('');
  return addWords.length > max.length ? addWords : max;
  }, '');
}
```
*Word a10n (abbreviation)*
https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript
```javascript
function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(w) { return w[0] + (w.length - 2) + w[w.length - 1] });
}
```
*First non-repeating character*
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
```javascript
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  let ind = 0;
  let res = str.split('').filter((el, i) => i ===str.indexOf(el) && i === str.lastIndexOf(el));
  if(res[0] !== undefined){
    ind = str.indexOf(res[0]);
  return s[ind];
  } else{
    return  '';
  }
}
```
*Sum of positive*
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/java
```java
public class Positive{
  public static int sum(int[] arr){
  int sum = 0;
    for(int i = 0; i < arr.length; i++){
      if(arr[i] > 0){
      sum = sum + arr[i];
      } 
    }
    return sum;
  }
}
```
*Two Joggers*
https://www.codewars.com/kata/two-joggers/train/javascript
```javascript
var nbrOfLaps = function(x, y) {
  var lcm = x;
  while(lcm % y != 0) {
    lcm += x;
  }
  return [lcm / x, lcm / y];
}
```
*Equal Sides Of An Array*
https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
```javascript
function findEvenIndex(arr){
  for(let i = 0; i < arr.length; i++){
    const sum1 = arr.slice(0, i).reduce((acc, curr)=> acc + curr, 0);
    const sum2 = arr.slice(i + 1).reduce((acc, curr)=> acc + curr, 0);
    if(sum1 === sum2){
      return i;
    } 
  }
   return -1;
}
```
*Remove the minimum*
https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
```javascript
function removeSmallest(num) {
  let num2 = [...num];
  if (num.length === 0 || num.length === 1) return [];
  let min = num2[0];
  let ind = 0;
  for (let i = 0; i < num2.length; i++) {
    if (min > num2[i + 1]) {
      min = num2[i + 1];
    }
  }
  ind = num2.indexOf(min)
  num2.splice(ind, 1);
  return num2;
  throw "TODO: removeSmallest";
}
```
*The Office III - Broken Photocopier*
https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript
```javascript
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
```
*Who likes it?*
https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
```javascript
function likes(names) {
if(names.length === 0) return 'no one likes this';
if(names.length === 1) return `${names[0]} likes this`;
if(names.length === 2) return `${names[0]} and ${names[1]} like this`;
if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
if(names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
```
*Find Maximum and Minimum Values of a List*
https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
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

  var max = function(list){
  let numMax = list[0];
  for(let i = 0; i < list.length; i++){
    if(numMax < list[i]){
     numMax = list[i];
    }
  }
    return numMax;
}
```
*Reverse every other word in the string*
https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
```javascript
function reverse(str){
  let str2= str.trim().replace(/\s+/, ' ');
  let arr = str2.split(' ');
  for(let i = 0; i < arr.length; i++){
    if(i % 2){
      arr[i] = arr[i].split('').reverse().join('');
    }
  }
  return arr.join(' ');
}
```
*Beginner Series #2 Clock*
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
```javascript
function past(h, m, s){
 return 1000 * (s + 60 * (m + h * 60));
}
```
*Beginner Series #4 Cockroach*
https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
```javascript
function cockroachSpeed(s) {
  return Math.floor((s * 1000 * 100 )/ (60 * 60));
}
```
*For Twins: 1. Types*
https://www.codewars.com/kata/for-twins-1-types/train/javascript
```javascript
function typeValidation(variable, type) {
  if(typeof variable === type){
    return true;
  } else {
    return false;
  }
}
```
*isReallyNaN*
https://www.codewars.com/kata/isreallynan/train/javascript
```javascript
const isReallyNaN = (val) => {
  return Number.isNaN(val);  
}
```
*Rock Paper Scissors!*
https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
```javascript
const rps = (p1, p2) => {
  if(p1 === p2) return 'Draw!';
  if(p1 === 'scissors' && p2 === 'paper'|| p1 === 'paper' && p2 === 'rock'|| p1 === 'rock' && p2 === 'scissors'){
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
  };
```
*Get Nth Even Number*
https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
```javascript
function nthEven(n){
  return n * 2 - 2;
}
```
*Clean up after your dog*
https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript
```javascript
function crap(x, bags, cap){
  let total = bags * cap;
  let str = x.toString();
  if(str.includes('D')) return 'Dog!!';
    const a = str.split('@').length - 1;
    if(a <= total) 
    return  'Clean';
      return 'Cr@p';
}
```      
*Sum of differences in array*
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
```javascript
function sumOfDifferences(arr) {
  let res = 0;
  if(arr.length === 1 || arr.length === 0){
    return 0;
  }
  arr.sort((a, b) => b - a);
  for(let i = 0; i < arr.length - 1; i++){
    res += (arr[i] - arr[i + 1]);
  }
  return res;
}
```
*For Twins: 2. Math operations*
https://www.codewars.com/kata/for-twins-2-math-operations/train/javascript
```javascript
function iceBrickVolume(radius, bottleLength, rimLength) {
  let a = radius * Math.sqrt(2);
  let height = bottleLength - rimLength;
  return Math.round(a ** 2 * height);
}
```
*Regex Password Validation*      
https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript
```javascript
function validate(password) {
  return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password);
}
```
*Moving Zeros To The End*
https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
```javascript
var moveZeros = function (arr) {
 let arr2 = [];
 let arr0 = [];
 for(let i = 0; i < arr.length; i++){
   if(arr[i] !== 0){
     arr2.push(arr[i]);
    } else {
      arr0.push(arr[i]);
    }
  }
  return arr2.concat(arr0);
}
```
*Array Leaders (Array Series #3)*
https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
```javascript
var arrayLeaders = num => {
  let arr = [];
  for(let i = 0; i < num.length; i++){
    let a = num.slice(i + 1).reduce((a, b) => a + b, 0);
    if(num[i] > a){
      arr.push(num[i]);
    }
  }
  return arr;
}
```
*Last*
https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
```javascript
function last(...list){
  let str = list.join();
  if(str.includes(',')) str = str.split(',');
  return !isNaN(+str[str.length-1]) ? +str[str.length-1] : str[str.length-1];
}
```
*2 variant*
```javascript
function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
```
*Welcome!*
https://www.codewars.com/kata/welcome/train/javascript
```javascript
function greet(language) {
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
  if(!dataBase[language]){
    return 'Welcome';
  }
  return dataBase[language];
}
```

*The Office I - Outed*
https://www.codewars.com/kata/the-office-i-outed/train/javascript
```javascript
function outed(meet, boss){
let sum = 0;
let length = 0;
for (let key in meet){
  if(key === boss){  
    sum += meet[key] * 2;
  } else {
    sum += meet[key];
  }
    length++;
  }
  return (sum/length <= 5) ? 'Get Out Now!' : 'Nice Work Champ!';
}
```
*Ordered Count of Characters*
https://www.codewars.com/kata/ordered-count-of-characters/train/javascript
```javascript
var orderedCount = function (text) {
  return [...new Set(text)].map(letter => [letter, text.split(letter).length - 1]);
};
```
*Understanding closures - the basics*
https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
```javascript
function buildFun(n){
	let res = [];
	for (let i = 0; i< n; i++){
		res.push(function(){
			return i;
		});
	}
	return res;
}
```
*Javascript Mathematician*
https://www.codewars.com/kata/javascript-mathematician/train/javascript
```javascript
function calculate(...a) {
  return function sum(...b){
    return [].concat(a, b).reduce((acc, curr) => acc + curr, 0);
  }
}
```

*Simple Fun #352: Reagent Formula*
https://www.codewars.com/kata/simple-fun-number-352-reagent-formula/train/javascript
```javascript
function isValid(f){
  let rule1 = !(f.includes(1) && f.includes(2));
    let rule2 = !(f.includes(3) && f.includes(4));
      let rule3 = f.includes(5) === f.includes(6);
        let rule4 = f.includes(7) || f.includes(8);
  return rule1 && rule2 && rule3 && rule4; 
}
```
*Check three and two*
https://www.codewars.com/kata/check-three-and-two/train/javascript
```javascript
function checkThreeAndTwo(array) {
  const a = array.filter(el=> el === 'a').length;
  const b = array.filter(el=> el === 'b').length;
  const c = array.filter(el=> el === 'c').length;
    if(a === 2 && b === 3) return true;
    if(a === 3 && b === 2) return true;
    if(b === 2 && c === 3) return true;
    if(a === 2 && c === 3) return true;
    if(a === 3 && c === 2) return true;
    if(b === 3 && c === 2) return true;
    if(b === 2 && c === 3) return true;
 return false;
}
```
*Smallest Difference*
https://www.codewars.com/kata/smallest-difference/train/javascript
```javascript
function smallestDiff(arr1, arr2) {
   if(arr1.length === 0 && arr2.length === 0) return -1;
   if(arr1.length === 0 && arr2.length > 0 ) return Math.min(...arr2);
   if(arr2.length === 0 && arr1.length > 0 ) return Math.min(...arr1);
   let arr3 = [];
   for(let i = 0; i < arr1.length; i++){
     for(let j = 0; j < arr2.length; j++){ 
       arr3.push(Math.abs(arr1[i] - arr2[j]));
    }
  }
  return Math.min(...arr3)
}
```
*Sum of positive*
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
```javascript
function positiveSum(arr) {
  return arr.reduce((acc, curr) => {return (curr > 0) ? (acc + curr) : (acc + 0)},0);
}
```
*Who's Online?*
https://www.codewars.com/kata/whos-online/train/javascript
```javascript
const whosOnline = (friends) => {
  const obj = {};
  if(friends.length === 0) {
    return obj;
  }
  let arrOnline = [];
  let arrOffline= [];
  let arrAway = [];
  for(let i = 0; i < friends.length; i++){
    if(friends[i].status === 'online' && friends[i].lastActivity <= 10){
      arrOnline.push(friends[i].username);
      obj.online = arrOnline;
    }
    if(friends[i].status === 'offline'){
      arrOffline.push(friends[i].username);
      obj.offline = arrOffline;
    }
    if(friends[i].status === 'online' && friends[i].lastActivity > 10){
      arrAway.push(friends[i].username);
      obj.away = arrAway;
    }
  }
  return obj;
}
```
*Round to the next multiple of 5*
https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
```javascript
function roundToNext5(n){
  return Math.ceil(n / 5) * 5;
}
```
*get ascii value of character*
https://www.codewars.com/kata/55acfc59c3c23d230f00006d/train/javascript
```javascript
function getASCII(c){
  return c.charCodeAt();
}
```
*Coding Meetup #2 - Higher-Order Functions Series - Greet developers*
https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
```javascript
function greetDevelopers(list) {
  for(let i = 0; i < list.length; i++){
    list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`};
  return list;
}
```
*Maximum Multiple*
https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript  
```javascript
function maxMultiple(divisor, bound){
  return Math.trunc(bound/ divisor) * divisor; 
}
```
*Backspaces in string*
https://www.codewars.com/kata/backspaces-in-string/train/javascript
```javascript
function clean_string(str) {
  var strArr = str.split('');
  if(strArr === [] || strArr.indexOf('#') === -1) {
    return strArr.join('');
  } else {
    for(let i = 0; i < strArr.length; i++) {
      if(strArr[i] === '#') {
        if(strArr[i-1] === undefined) {
          strArr.splice(i,1);
          return clean_string(strArr.join(''));
        } else {
          strArr.splice(i-1,2);
          return clean_string(strArr.join(''));
        }
      }
    }  
  }
} 
```
*2 version*
```javascript
function clean_string(s) {
  const result = [];
  for (let letter of s) {
    if (letter === '#') {
      result.pop();
    } else {
      result.push(letter);
    }
  }
  return result.join('');
}
```
*Fifa 17 Launch*
https://www.codewars.com/kata/fifa-17-launch/train/javascript
```javascript
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
```
*Sum of Array Averages*
https://www.codewars.com/kata/sum-of-array-averages/train/javascript
```javascript
const sumAverage = (arr) => {
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    let sum = arr[i].reduce((a, b) => a + b, 0);
    let l = arr[i].length;
    result += sum / l;
  }
  return Math.floor(result);
}
```
*2 version*
```javascript
const sumAverage = (arr) => {
  let result = Math.floor(arr
  .map(el => el
  .reduce((a, b)=> a + b, 0) / el.length)
  .reduce((a, b)=> a + b, 0));
  return result;
}
```
*Number of People in the Bus*
https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript
```javascript
var number = function(busStops){
 return busStops.reduce((acc,[a,b])=> (acc + a - b), 0)
}
```
*TV Remote*
https://www.codewars.com/kata/tv-remote/train/javascript
```javascript
var tvRemote = (function() {
  let obj = {'a': [0, 0], 'b': [0, 1], 'c': [0, 2], 'd': [0, 3], 'e': [0, 4], 
             '1': [0, 5], '2': [0, 6], '3': [0, 7], 'f': [1, 0], 'g': [1, 1], 
             'h': [1, 2], 'i': [1, 3], 'j': [1, 4], '4': [1, 5], '5': [1, 6], 
             '6': [1, 7], 'k': [2, 0], 'l': [2, 1], 'm': [2, 2], 'n': [2, 3], 
             'o': [2, 4], '7': [2, 5], '8': [2, 6], '9': [2, 7], 'p': [3, 0], 
             'q': [3, 1], 'r': [3, 2], 's': [3, 3], 't': [3, 4], '.': [3, 5], 
             '@': [3, 6], '0': [3, 7], 'u': [4, 0], 'v': [4, 1], 'w': [4, 2], 
             'x': [4, 3], 'y': [4, 4], 'z': [4, 5], '_': [4, 6], '/': [4, 7]};
  return function(word) {
    let arr = [0, 0];
    return [...word].map(x => { let temp = Math.abs(obj[x][0] - arr[0]) + Math.abs(obj[x][1] - arr[1]) + 1; arr = [...obj[x]]; return temp;})
                    .reduce((a, b) => a + b, 0);
  }
})();
```
*2 version*
```javascript
const tvRemote = function(word) {
  let keys = 'abcde123fghij456klmno789pqrst.@0uvwxyz_/';
  let pos = [ 0, 0 ];
  let res = 0;
  for (let char of word) {
    let i = keys.indexOf(char);
    let dest  = [ i / 8 | 0, i % 8 ];
    res += Math.abs(dest[0] - pos[0]) + Math.abs(dest[1] - pos[1]) + 1;
    pos = dest;
  }
  return res;
};
```
*Find the next perfect square!*
https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
```javascript
function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq))){
    return (Math.sqrt(sq) + 1) ** 2;
  }
  return -1;
}
```

*Sum Strings as Numbers*
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
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


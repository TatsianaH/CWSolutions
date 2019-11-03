//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

// write the function isAnagram
let isAnagram = function(test, original) {
let t = test.toLowerCase().split('').sort().join('');
let o = original.toLowerCase().split('').sort().join('');
return  t === o ;
};

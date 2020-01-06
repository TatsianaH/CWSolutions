// https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript

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

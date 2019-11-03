//https://www.codewars.com/kata/where-my-anagrams-at/train/javascript

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
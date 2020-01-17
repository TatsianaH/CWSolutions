// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(str, k) {
  if (k > str.length || str.length === 0 || k <= 0) return '';
  return str.reduce((max, item, i) => {
  const addWords = str.slice(i, i + k).join('');
  return addWords.length > max.length ? addWords : max;
  }, '');
}

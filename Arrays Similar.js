//https://www.codewars.com/kata/arrays-similar/train/javascript

function arraysSimilar(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  return (arr1.length > arr2.length) ? arr1.every((el,i) => el === arr2[i]) : arr2.every((el, i) => el === arr1[i]);
}
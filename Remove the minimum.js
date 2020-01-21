// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

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

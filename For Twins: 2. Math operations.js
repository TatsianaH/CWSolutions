// https://www.codewars.com/kata/for-twins-2-math-operations/train/javascript

function iceBrickVolume(radius, bottleLength, rimLength) {
  let a = radius * Math.sqrt(2);
  let height = bottleLength - rimLength;
  return Math.round(a ** 2 * height);
}

// https://www.codewars.com/kata/5abb8e941ea65df9870000a9/train/javascript

Array.prototype.flatMap = function(f) {
  return this.reduce((a, b) => a.concat(f(b)), []);
}

// https://www.codewars.com/kata/two-joggers/train/javascript

var nbrOfLaps = function(x, y) {
  var lcm = x;
  while(lcm % y != 0) {
    lcm += x;
  }
  return [lcm / x, lcm / y];
}
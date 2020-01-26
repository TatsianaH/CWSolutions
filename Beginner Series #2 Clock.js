//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s){
 return 1000 * (s + 60 * (m + h * 60));
}
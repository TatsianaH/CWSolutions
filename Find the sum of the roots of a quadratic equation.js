// https://www.codewars.com/kata/57d448c6ba30875437000138/train/javascript

function roots(a,b,c){
// discriminant D = b ** 2 − 4ac.
    const d = b ** 2 - 4 * a * c;
    if(d < 0) return null;
    else return Math.round(-b / a * 100) / 100;
}
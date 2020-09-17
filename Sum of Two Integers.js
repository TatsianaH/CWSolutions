// https://www.codewars.com/kata/5a9c35e9ba1bb5c54a0001ac/train/javascript

function add(x, y){
    return y ? add(x ^ y, (x & y) << 1) : x;
}
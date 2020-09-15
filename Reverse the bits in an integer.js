// https://www.codewars.com/kata/5959ec605595565f5c00002b/train/javascript

function reverseBits (n) {
    n = (n).toString(2); // get in binary
    n = n.split('').reverse().join(''); // reverse binary
    n = parseInt(n, 2); // convert to decimal
    return n;

}
// https://www.codewars.com/kata/whats-the-real-floor/train/javascript

function getRealFloor(n) {
    if(n < 0) return n;
    else if( n >= 0 && n <= 1) return 0;
    else if(n > 2 && n < 13) return n - 1;
    else return n - 2;
}
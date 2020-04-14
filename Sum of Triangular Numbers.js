// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript

function sumTriangularNumbers(n) {
    if(n <= 0) return 0;
    let arr = [];
    let i = 1, count = 0
    while(count < n){
        arr.push(i);
        count++;
        i = i + 1 + count;
    }
    return arr.reduce((a, b) => a + b, 0);
}
// https://www.codewars.com/kata/59971206e06bbf4407002382/train/javascript

var sumAndMultiply = function(sum, mult) {
    let arr = [];
    for(let i = 0; i <= 1000; i++){
        for(let j = 0; j <= 1000; j++){
            if(i + j ===sum && i * j === mult) arr.push(i,j);
        }
    }
    return arr.length >= 2 ? arr.slice(0,2) : null;
}
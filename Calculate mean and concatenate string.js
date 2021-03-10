// https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript

function mean(lst){
    let num = [];
    let letter = [];
    for(let i = 0; i < lst.length; i++){
        if(typeof +lst[i] === 'number' && !Number.isNaN(+lst[i])){
            num.push(lst[i]);
        } else{
            letter.push(lst[i]);
        }
    }
    const n = parseFloat(num.reduce((a, b) => +a + +b, 0) / 10).toPrecision(2);
    const l = letter.reduce((a, b) => a + b, '');
    return [+n, l];
}

// 2 variant

function mean(lst){
    var num = 0, str = '';
    lst.forEach(function(n) {
        if(!isNaN(n)) {
            num += +n;
        }else {
            str += n;
        }
    });
    return [num / 10, str];
}
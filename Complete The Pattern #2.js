// https://www.codewars.com/kata/55733d3ef7c43f8b0700007c/train/javascript

function pattern(n){
    let output = '';
    let num = '';
    while (n > 0){
        num += n;
        output = num + (output ? '\n' : '') + output;
        n--;
    }
    return output;
}
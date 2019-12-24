// https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript

function nthChar(w){
    let str = '';
    for(let i = 0; i < w.length; i++){
        str += w[i][i];
    }
    return str;
}
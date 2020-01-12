// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

function mango(q, p){
    let num = Math.floor(q / 3);
    let over = q % 3;
    let res = (num * 2 + over) * p;
    return res;
}
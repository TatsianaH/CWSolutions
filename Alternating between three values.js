// https://www.codewars.com/kata/596776fbb4f24d0d82000141/train/javascript

function f(x, cc) {
    if(cc.a === x) x = cc.b;
    else if(cc.b === x) x = cc.c;
    else return cc.a
    return x;
}

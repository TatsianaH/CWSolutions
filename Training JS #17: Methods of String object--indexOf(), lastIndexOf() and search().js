// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str,c){
    let i1 = str.indexOf(c);
    let i2 = str.lastIndexOf(c);
    if (i1 === -1 || i2 === -1) return -1;
    else if (i1 === -1 || i2 === -1) return 0;
    else return i2 - i1;

}
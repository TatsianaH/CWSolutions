// https://www.codewars.com/kata/59c62f1bdcc40560a2000060/train/javascript

function solve(a){
    const even = a.filter(el => el % 2 === 0).length;
    const odd = a.filter(el => el % 2).length;
    return even - odd;
};
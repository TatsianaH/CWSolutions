// https://www.codewars.com/kata/kebabize/train/javascript

function solve(s) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let arr = [];
    s = s.replace(/[aeuio]/g, ' ').split(' ');
    for(let i = 0; i < s.length; i++){
        let sum = 0;
        for(let j = 0; j < s[i].length; j++){
            sum += alph.indexOf(s[i][j]) + 1;
            arr.push(sum)
        }
    }
    return Math.max(...arr);
}
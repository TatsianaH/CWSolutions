// https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript

function findMissingNumber(s){
    if(s.length === 0) return 0;
    s = s.split(' ');
    if(s.filter(el => isNaN(el)).length > 0) return 1;
    s.sort((a, b) => a - b);
    for(let i = 0; i < s.length; i++){
        if(+s[i] !== i + 1) return i + 1;
    }
    return 0;
}
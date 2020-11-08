// https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

function solve(s){
    let obj = {};
    for(let letter of s){
        if(obj[letter]) obj[letter] += 1;
        else obj[letter] = 1;
    }
    const amount = Object.values(obj).every(el => el === 1);
    if(amount){
        const keys = Object.keys(obj).sort().join('');
        const alph = 'abcdefghijklmnopqrstuvwxyz';
        return alph.includes(keys);
    }
    return false;
}
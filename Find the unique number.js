// https://www.codewars.com/kata/55f81f9aa51f9b72a200002f/train/javascript

function findUnique(n) {
    const obj = {};
    for(let el of n){
        if(obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    for(let key in obj){
        if(obj[key] === 1) return +key;
    }
}

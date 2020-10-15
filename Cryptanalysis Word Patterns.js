// https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/javascript

function wordPattern(word) {
    word = word.toLowerCase();
    const obj = {};
    let ind = 0;
    for(let i = 0; i < word.length; i++){
        if(obj[word[i]] === undefined){
            obj[word[i]] = ind;
            ind++;
        }
    }
    let res = '';
    for(let i = 0; i < word.length; i++){
        if(i !== word.length - 1) res += obj[word[i]] + '.';
        else res += obj[word[i]];
    }
    return res;
}
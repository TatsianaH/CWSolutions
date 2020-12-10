// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

function vowelIndices(word){
    word = word.toLowerCase();
    let indices = [];
    for(let i = 0; i < word.length; i++){
        if(('aeouiy').includes(word[i])) indices.push(i + 1);
    }
    return indices;
}

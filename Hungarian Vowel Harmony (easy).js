// https://www.codewars.com/kata/57fd696e26b06857eb0011e7/train/javascript

function dative(word) {
    const nek = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
    const nak = ['a', 'á', 'o', 'ó', 'u', 'ú'];
    for(let i = word.length - 1; i >= 0; i--){
        if(nek.includes(word[i])) return word + 'nek';
        if(nak.includes(word[i])) return word + 'nak';
    }
}
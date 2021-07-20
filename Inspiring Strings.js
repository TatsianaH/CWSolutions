// https://www.codewars.com/kata/5939ab6eed348a945f0007b2/train/javascript

function longestWord(s){
    const words = s.split(' ');
    const max = Math.max(...words.map(el => el.length));
    for(let i = words.length - 1; i >= 0; i--){
        if(words[i].length === max) return words[i];
    }
    return '';
}

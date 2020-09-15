// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

function longestRepetition(s) {
    if (s.length === 0) return ["", 0];
    let arr = [];
    let letter = s[0];
    for(let i = 1; i <= s.length; i++){
        if(s[i] === letter[letter.length - 1]) {
            letter += s[i];
        } else {
            arr.push([letter[0], letter.length]);
            letter = s[i];
        }
    }
    const lengthOfRep = arr.map((el, i) => el[1]);
    const max = Math.max(...lengthOfRep);
    return arr.filter((el, i) => el[1] === max)[0];
}
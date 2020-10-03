// https://www.codewars.com/kata/5944367162ed20be2a00005d/train/javascript

function vowelFilter (letters) {
    const vowels = ["a", "e", "i", "o", "u"];
    return letters.filter(letter => !vowels.includes(letter));
};
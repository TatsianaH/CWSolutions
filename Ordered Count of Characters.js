// https://www.codewars.com/kata/ordered-count-of-characters/train/javascript

const orderedCount = function (text) {
    return [...new Set(text)].map(letter => [letter, text.split(letter).length - 1]);
};

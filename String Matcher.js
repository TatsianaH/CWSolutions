// https://www.codewars.com/kata/565ce4ab24ef4aee6a000074/train/javascript

function isMatching(s, s1, s2) {
    const comb = (s1 + s2).toLowerCase().replace(/ /g, '').split('').sort().join('');
    s = s.toLowerCase().replace(/ /g, '').split('').sort().join('');
    return s === comb;
}
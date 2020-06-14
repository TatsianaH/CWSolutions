// https://www.codewars.com/kata/570f6436b29c708a32000826/train/javascript

function firstNonRepeated(s) {
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return s[i];
    }
    return null;
}
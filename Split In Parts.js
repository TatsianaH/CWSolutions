// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

var splitInParts = function(s, partLength){
    let str = '';
    for(let i = 0; i < s.length; i += partLength){
        str += s.slice(i, i + partLength) + ' ';
    }
    return str.trimRight();
}
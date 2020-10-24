// https://www.codewars.com/kata/598ab63c7367483c890000f4/train/javascript

function stringTask(s){
    s = s.toLowerCase().replace(/[aeoiyu]/g, '');
    let res = '';
    for(let l of s){
        res += '.' + l;
    }
    return res;
}
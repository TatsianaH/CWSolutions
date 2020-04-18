// https://www.codewars.com/kata/5888cba35194f7f5a800008b/train/javascript

function asteriscIt(n) {
    if(Array.isArray(n)) n = n.join('');
    if(typeof n !== 'string') n = String(n);
    let res = n[0];
    for(let i = 0; i < n.length - 1; i++){
        if(n[i] % 2 === 0 && n[i + 1] % 2 === 0){
            res += '*' + n[i + 1];
        } else {
            res += n[i + 1];
        }
    }
    return res;
}
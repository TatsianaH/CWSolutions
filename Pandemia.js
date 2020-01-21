// https://www.codewars.com/kata/5e2596a9ad937f002e510435/train/javascript

function infected(s) {
    let inf = 0;
    let total = 0;
    let perc = 0;
    let zero = 0;
    if(!s.includes('X') && s.includes('1')) return 100;
    if(!s.includes('0') && !s.includes('1')) return 0;
    let arr = s.split('X');
    let res = arr.map(el => {
        if(el.includes('1')){
            el = el.replace(/0/g, '1');
        } else {
            el = '';
        }
        return el;
    });
    res = res.join('');
    for(let i = 0; i < s.length; i++){
        if(s[i] === '0' || s[i] === '1') total++;
        if(res[i] === '1') inf++;
    }
    perc = inf / total * 100;
    return perc;
}
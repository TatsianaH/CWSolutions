// https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript

function countConsonants(str) {
    str = str.replace(/[^a-z]/gi, '').toLowerCase();
    let res = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] !== 'a' && str[i] !== 'o' && str[i] !== 'e' && str[i] !== 'u' && str[i] !== 'i'){
            if(!res.includes(str[i])) res += str[i];
        }
    }
    return res.length;
}
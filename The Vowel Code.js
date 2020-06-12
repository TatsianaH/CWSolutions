// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

function encode(str) {
    const obj = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
    let res = '';
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]) res += obj[str[i]];
        else res += str[i];
    }
    return res;
}

function decode(str) {
    const obj = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
    };
    let res = '';
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]) res += obj[str[i]];
        else res += str[i];
    }
    return res;
}
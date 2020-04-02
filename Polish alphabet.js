//https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript

function correctPolishLetters (str) {
    const obj = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z',
    }
    let res = '';
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]) res += obj[str[i]];
        else res += str[i];
    }
    return res;
}
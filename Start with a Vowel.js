// https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167/train/javascript

function vowelStart(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let s = '';
    for(let i = 0; i < str.length; i++){
        if(('oueai').includes(str[i])){
            s += ' ' + str[i];
        } else {
            s += str[i];
        }
    }
    return s.trimLeft();
}
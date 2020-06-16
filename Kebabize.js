// https://www.codewars.com/kata/kebabize/train/javascript

function kebabize(str) {
    str = str.replace(/[0-9]/g, '').split('');
    for (let i = 0; i < str.length; i++){
        if(str[0] === str[i].toUpperCase()){
            str[0] = str[0].toLowerCase();
        }
        if(str[i] === str[i].toUpperCase()){
            str.splice(i, 1, `-${str[i].toLowerCase()}`);
        }
    }
    return str.join('');
}

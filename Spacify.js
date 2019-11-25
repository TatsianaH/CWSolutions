//https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript

function spacify(str) {
    let res = '';
    for(let i = 0; i < str.length; i++){
        res+= str[i] + ' ';
    }
    return res.trimRight();
}
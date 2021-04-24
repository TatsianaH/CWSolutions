// https://www.codewars.com/kata/5a434a9dc5e284724f000011/train/javascript

function replaceCommon(str, l) {
    const obj = {};
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]) obj[str[i]] += 1;
        else obj[str[i]] = 1;
    }
    let max = 0;
    let letter = '';
    for(let key in obj){
        if(obj[key] > max && key !== ' ') {
            max = obj[key];
            letter = key;
        }
    }
    letter = new RegExp(letter, 'g');;
    const res = str.replace(letter, l);
    return res;
}

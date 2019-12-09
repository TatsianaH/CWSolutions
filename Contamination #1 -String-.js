// https://www.codewars.com/kata/contamination-number-1-string/train/javascript

function contamination(text, char){
    let str = '';
    for(let i = 0; i < text.length; i++){
        if(text[i] === undefined) {
            return text;
        } else {
            str += char;
        }
    }
    return str;
}
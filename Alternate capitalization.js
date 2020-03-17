// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

function capitalize(s){
    let w1 = '';
    let w2 = '';
    for(let i = 0; i < s.length; i++){
        if(i % 2 === 0){
            w1 += s[i].toUpperCase();
            w2 += s[i];
        } else {
            w2 += s[i].toUpperCase();
            w1 += s[i];
        }
    }
    return [w1, w2];
}
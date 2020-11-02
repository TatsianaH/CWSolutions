// https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript

function moveTen(s){
    const alph = ' abcdefghijklmnopqrstuvwxyz';
    let str = '';
    for(let i = 0; i < s.length; i++){
        let ind = alph.indexOf(s[i]) + 10;
        if(ind > 26){
            ind -= 26;
        }
        str += alph[ind];
    }
    return str;
}
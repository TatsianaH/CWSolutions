// https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript

function formatWords(w){
    if(!w || w.length === 0) return '';
    w = w.filter(el => el !== '');
    if(w.length === 1) return w[0];
    let res = '';
    for(let i = 0; i < w.length; i++){
        if(i === w.length - 2){
            res += w[i] + ' ';
        } else if(i === w.length - 1){
            res += 'and ' + w[i];
        } else {
            res += w[i] + ', ';
        }
    }
    return res;
}
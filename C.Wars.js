// https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript

function initials(n){
    n = n.split(' ');
    let res = '';
    for(let i = 0; i < n.length; i++){
        if(i !== n.length - 1) res += n[i][0].toUpperCase() + '.';
        else res += n[i][0].toUpperCase() + n[i].slice(1);
    }
    return res;
}
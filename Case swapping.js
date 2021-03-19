// https://www.codewars.com/kata/5590961e6620c0825000008f/train/javascript

function swap(str){
    let res = '';
    for(let l of str){
        if(l === l.toLowerCase()) res += l.toUpperCase();
        else res += l.toLowerCase();
    }
    return res;
}
// https://www.codewars.com/kata/5bf774a81505a7413400006a/train/javascript

function fix(p){
    if(p.length < 1) return '';
    let arr = p.split('. ');
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('. ');
}
// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript

function disariumNumber(n){
    n = n.toString();
    let res = 0;
    for(let i = 0; i < n.length; i++){
        res += Math.pow(n[i], i + 1);
    }
    return +n === res ? 'Disarium !!' : 'Not !!';
}
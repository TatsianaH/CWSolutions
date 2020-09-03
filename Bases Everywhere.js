// https://www.codewars.com/kata/5f47e79e18330d001a195b55/train/javascript

function baseFinder(seq){
    seq = seq.join('');
    for(let i = 0; i < seq.length; i++){
        if(!seq.includes(i)) return i;
    }
    return 10;
}
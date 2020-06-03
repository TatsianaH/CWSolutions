// https://www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript

const mispelled = function(w1, w2){
    if(Math.abs(w1.length - w2.length) > 1) return false;

    if(Math.abs(w1.length - w2.length) === 1){
        if(w1.length > w2.length){
            return w1.includes(w2);
        } else {
            return w2.includes(w1);
        }
    }
    let count = 0;
    for(let i = 0; i < w1.length; i++){
        if(w2[i] === w1[i]) count++;
    }
    return count === w1.length - 1;
}


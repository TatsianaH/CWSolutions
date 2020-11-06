// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript

function arithmeticSequenceElements(a,r,n) {
    let seq = [];
    let i = a;
    while(seq.length < n){
        seq.push(i);
        i += r;
    }
    return seq.join(', ');
}
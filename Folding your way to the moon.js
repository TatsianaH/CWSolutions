// https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript

function foldTo(d) {
    if(d < 0) return null;
    let count = 0;
    let paper = 0.0001;
    while(paper < d){
        paper = paper * 2;
        count++;
    }
    return count;
}
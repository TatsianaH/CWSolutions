// https://www.codewars.com/kata/55caef80d691f65cb6000040/train/javascript

function geometricSequenceElements(a, r, n){
    let arr =[a];
    let i = a;
    while(arr.length < n){
        arr.push(i * r);
        i = i * r
    }
    return arr.join(', ');
}
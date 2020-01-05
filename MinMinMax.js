// https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript

function minMinMax(a) {
    let arr = [];
    arr[0] = Math.min(...a);
    arr[2] = Math.max(...a);
    for(let i = arr[0] + 1; i < arr[2]; i++){
        if(!a.includes(i)) {
            arr[1] = i;
            return arr;
        }
    }
}
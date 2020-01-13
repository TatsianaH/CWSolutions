// https://www.codewars.com/kata/523d2e964680d1f749000135/train/javascript

function interleave() {
    if(arguments.length === 1) return arguments[0];
    const arr = [...arguments];
    let listArgsLength = arr.map(el => el.length);
    let maxLength = Math.max(...listArgsLength);
    const res = [];
    for(let i = 0; i < maxLength; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j][i] === undefined) res.push(null);
            else res.push(arr[j][i]);
        }
    }
    return res;
}
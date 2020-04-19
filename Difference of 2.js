// https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript

function twosDifference(input){
    let arr = [];
    for(let i = 0; i < input.length - 1; i++){
        for(j = i + 1; j < input.length; j++){
            if(Math.abs(input[i] - input[j]) === 2) {
                if(input[i] > input[j]) arr.push([input[j], input[i]]);
                else arr.push([input[i], input[j]]);
            }
        }
    }
    return arr.sort((a, b, i) => a[0] - b[0]);
}
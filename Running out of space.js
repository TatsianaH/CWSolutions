// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript

function spacey(array){
    let arr = [array[0]];
    for(let i = 1; i < array.length; i++){
        arr[i] = arr[arr.length - 1] + array[i];
    }
    return arr;
}
// https://www.codewars.com/kata/5b5097324a317afc740000fe/train/javascript

function binaryCleaner(arr) {
    const arr1 = [];
    const arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 1) arr2.push(i);
        else arr1.push(arr[i]);
    }
    return [arr1, arr2];
}

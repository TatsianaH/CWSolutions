// https://www.codewars.com/kata/59dc8288fc3c49cc3f000039/train/javascript

function sort(initialArray, sortingArray){
    let res = [];
    for (let i = 0; i < initialArray.length; i++) {
        res[sortingArray[i]] = initialArray[i];
    }
    return res;
}
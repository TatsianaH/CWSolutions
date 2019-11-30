// https://www.codewars.com/kata/merge-two-sorted-arrays-into-one/train/javascript

function mergeArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2).sort((a, b) => a - b)
    return arr3.filter((el, i) => i === arr3.indexOf(el));
}

// 2 case

function mergeArrays(arr1, arr2) {

    for (let i = 0; i < arr2.length; i++){
        if(!arr1.includes(arr2[i])){
            arr1.push(arr2[i]);
        }
    }
    arr1.sort(function (a,b){
        return a - b;
    });
    return arr1;
}
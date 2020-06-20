// https://www.codewars.com/kata/52840d2b27e9c932ff0016ae/train/javascript

const locate = function(arr,value){

    function flattenDeep(arr) {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
    }

    const arr1 = flattenDeep(arr);
    return arr1.includes(value);
}
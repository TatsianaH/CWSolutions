// https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript

function dominator(arr) {
    const length = arr.length;
    const obj = {};
    let i = 0;
    while(i < length){
        if(!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]] += 1;
        i++;
    }
    const res = Object.entries(obj).filter((el, i) => el[1] > length/ 2);
    return res[0] ? +res[0][0] : -1;
}

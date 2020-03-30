// https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript

function letterCheck(arr) {
    arr = arr.map(el => el.toLowerCase());
    for(let i = 0; i < arr[1].length; i++){
        if(!arr[0].includes(arr[1][i])) return false;
    }
    return true;
}
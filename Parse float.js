// https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript

function parseF(s) {
    if(!parseFloat(s) && parseFloat(s) !== 0){
        return null;
    } else {
        return parseFloat(s)
    }
}
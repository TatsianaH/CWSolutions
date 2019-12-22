// https://www.codewars.com/kata/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence/train/javascript

function remove(s){
    return s.replace(/!*$/g, '');
}
// https://www.codewars.com/kata/5a084a098ba9146690000969/train/javascript

function timeConvert(num) {
    if(num <= 0) return '00:00';
    else {
        let h = String(Math.trunc(num / 60));
        let m = String(num % 60);
        return `${h.padStart(2, '0')}:${m.padStart(2, '0')}`;
    }
}
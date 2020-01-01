// https://www.codewars.com/kata/holiday-ii-plane-seating/train/javascript

function planeSeat(a){
    let res = '';
    let num = +a.replace(/[a-z]/gi, '');
    let l = a.replace(/[0-9]/gi, '');
    if(num <= 20) res += 'Front-';
    else if(num > 20 && num <= 40) res += 'Middle-';
    else if(num > 40 && num <= 60) res += 'Back-';
    else return 'No Seat!!';
    if( l <= 'C') res += 'Left';
    else if(l >= 'D' && l <= 'F') res += 'Middle';
    else if(l === 'G' || l === 'K' || l === 'H') res += 'Right';
    else return 'No Seat!!';
    return res;
}
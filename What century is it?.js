// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript

function whatCentury(year){
    const y = Math.trunc((Number(year) + 99) / 100);
    const reminder = y % 10;
    if(reminder === 1 && y !== 11) return y + 'st';
    else if(reminder === 2 && y !== 12) return y + 'nd';
    else if(reminder === 3 && y !== 13) return y + 'rd';
    else return y + 'th';
}
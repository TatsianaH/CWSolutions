// https://www.codewars.com/kata/55b1fd84a24ad00b32000075/train/javascript

const AmIAfraid = function(d, n){
    if(d === 'Monday' && n === 12) return true;
    if(d === 'Tuesday' && n > 95) return true;
    if(d === 'Wednesday' && n === 34) return true;
    if(d === 'Thursday' && n === 0) return true;
    if(d === 'Friday' && n % 2 === 0) return true;
    if(d === 'Saturday' && n === 56) return true;
    if(d === 'Sunday' && n === 666) return true;
    if(d === 'Sunday' && n === -666) return true;
    else return false;
}
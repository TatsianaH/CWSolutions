//https://www.codewars.com/kata/58e93b4706db4d24ee000096/train/javascript

function daysRepresented(trips){
    let arr = [];
    for(let i = 0; i < trips.length; i++){
        for(let j = trips[i][0]; j <= trips[i][1]; j++){
            arr.push(j);
        }
    }
    return [...new Set([].concat(...arr))].length;
}
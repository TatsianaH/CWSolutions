// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages){
    const youngest = Math.min(...ages);
    const oldest = Math.max(...ages);
    return [youngest, oldest, oldest - youngest];
}

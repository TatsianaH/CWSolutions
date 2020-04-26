// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
    if(Number.isInteger(Math.sqrt(sq))){
        return (Math.sqrt(sq) + 1) ** 2;
    }
    return -1;
}
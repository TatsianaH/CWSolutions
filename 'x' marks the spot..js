// https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript

const xMarksTheSpot = (inp) => {
    let count = 0;
    let coord = [];
    for(let i = 0; i < inp.length; i++){
        for(let j = 0; j < inp[i].length; j++){
            if(inp[i][j] === 'x'){
                count++;
                coord = [i, j];
            }
        }
    }
    return count === 1 ? coord : [];
}
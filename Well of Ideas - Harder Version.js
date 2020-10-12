// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript

function well(x){
    let count = 0;
    for(let i = 0; i < x.length; i++){
        for(let j = 0; j < x[i].length; j++){
            if(typeof x[i][j] === 'string' && x[i][j].toLowerCase() === 'good') count ++;
        }
    }
    if(count === 0) return 'Fail!';
    if(count <= 2) return 'Publish!';
    if(count > 2) return 'I smell a series!';
}
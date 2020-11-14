// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

function generateShape(int){
    let sq = [];
    for(let i = 0; i < int; i++){
        sq[i] = ('+').repeat(int);
        if(i !== int - 1) sq[i] += '\n';
    }
    return sq.join('');
}
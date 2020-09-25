// https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript

function gridIndex(grid, indices) {
    grid = grid.flat();
    let word = '';
    for(let i = 0; i < indices.length; i++){
        if(grid[indices[i] - 1] !== undefined) word += grid[indices[i] - 1];
    }
    return word;
}

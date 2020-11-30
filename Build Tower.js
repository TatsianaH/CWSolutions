// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
    let tower = [];
    let length = nFloors + nFloors - 1;
    for(let j = 0, i = 1; j < nFloors, i <= length; i += 2, j++){
        const spaces = (length - i) / 2;
        tower[j] = (' ').repeat(spaces) + ('*').repeat(i) + (' ').repeat(spaces);
    }
    return tower;
}
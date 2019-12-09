// https://www.codewars.com/kata/multiplication-table-for-number/train/javascript

function multiTable(num) {
    let table = '';
    for(let j = 1; j <= 10; j++){
        table += `${j} * ${num} = ${j * num}`+ '\n';
    }
    return table.trimRight();
}
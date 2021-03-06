// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

const humanYearsCatYearsDogYears = function(hY) {
    let years = [0, 0, 0];
    for(let i = 1; i <= hY; i++){
        if(i === 1){
            years[1] += 15;
            years[2] += 15;
        } else if(i === 2){
            years[1] += 9;
            years[2] += 9;
        } else {
            years[1] += 4;
            years[2] += 5;
        }
    }
    years[0] = hY;
    return years;
}

// 2 case

const humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15];
    if (y == 2) return [2, 24, 24];
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24];
}
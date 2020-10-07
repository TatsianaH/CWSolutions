// https://www.codewars.com/kata/5a6d3bd238f80014a2000187/train/javascript

const ownedCatAndDog = function(catYears, dogYears) {
    let ownedCat = 0;
    let ownedDog = 0;
    let i = 0;
    while(catYears > 0){
        if(i === 0){
            catYears = catYears - 15;
        } else if(i === 1){
            catYears = catYears - 9;
        } else {
            catYears = catYears - 4;
        }
        if(catYears < 0) continue;
        i++;
        ownedCat++;
    }
    i = 0;
    while(dogYears > 0){
        if(i === 0){
            dogYears = dogYears - 15;
        } else if(i === 1){
            dogYears = dogYears - 9;
        } else {
            dogYears = dogYears - 5;
        }
        if(dogYears < 0) continue;
        i++;
        ownedDog++;
    }
    return [ownedCat, ownedDog];
}

// 2 case

const ownedCatAndDog = function(cy, dy) {
    let cat = cy < 15 ? 0: cy < 24? 1: 2 + Math.trunc((cy - 24) / 4);
    let dog = dy < 15 ? 0: dy < 24? 1: 2 + Math.trunc((dy - 24) / 5);
    return [cat, dog];
}
// https://www.codewars.com/kata/57d001b405c186ccb6000304/train/javascript

function iTri(s){
    const d = 2.4 + 112 + 26.2;
    if(s === 0) return 'Starting Line... Good Luck!';
    else if(s <= 2.4) return {'Swim': `${(d - s).toFixed(2)} to go!`};
    else if(s > 2.4 && s <= 114.4) return {'Bike': `${(d - s).toFixed(2)} to go!`};
    else if(s > 114.4 && s < d - 10) return {'Run': `${(d - s).toFixed(2)} to go!`};
    else if(s >= d - 10 && s < d) return {'Run': 'Nearly there!'};
    else return 'You\'re done! Stop running!';
}

// 2 variant

function iTri(dist){
    let totalDist = 2.4 + 112 + 26.2;
    if (dist === 0) return 'Starting Line... Good Luck!';
    if (dist <= 2.4) return {'Swim': `${(totalDist - dist).toFixed(2)} to go!`};
    if (dist <= 114.4) return {'Bike': `${(totalDist - dist).toFixed(2)} to go!`};
    if (dist <= 127) return {'Run': `${(totalDist - dist).toFixed(2)} to go!`};
    if (dist < totalDist) return {'Run': `Nearly there!`};
    return "You're done! Stop running!";
}


// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript

function movie(card, ticket, perc) {
    let resA = 0;
    let resB = card;
    let count = 0;
    while(!(Math.ceil(resB) < resA)){
        count++;
        resA += ticket;
        resB += ticket * (perc ** count);
    }
    return count;
}
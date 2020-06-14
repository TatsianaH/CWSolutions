// https://www.codewars.com/kata/57d28215264276ea010002cf/train/javascript

function leaderB(user, user_score, your_score){
    if(user_score === your_score) return 'Only need one!';
    else if (user_score < your_score) return 'Winning!';
    else {
        let res = '';
        const diff = user_score - your_score;
        let beta = Math.trunc(diff / 3);
        let kata = diff - beta * 3;
        if(beta + kata <= 1000){
            res += `To beat ${user}'s score, I must complete ${beta} Beta kata and ${kata} 8kyu kata.`;
        } else {
            res += `To beat ${user}'s score, I must complete ${beta} Beta kata and ${kata} 8kyu kata. Dammit!`;
        }
        return res;
    }
}
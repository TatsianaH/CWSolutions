// https://www.codewars.com/kata/5977387e131c07082b000098/train/javascript

function getRes(myScore) {
    const str1 = 'Thank you for taking part.';
    return myScore >= 70 ? 'Congratulations, you have passed! ' + str1 : 'Sorry, you have failed. Better luck next time! ' + str1;
}
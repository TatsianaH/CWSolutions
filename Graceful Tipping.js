// https://www.codewars.com/kata/5eb27d81077a7400171c6820/train/javascript

function gracefulTipping(bill) {
    let final = bill * 1.15;
    if(final < 10){
        return Math.ceil(final);
    } else {
        const billLength = final.toString().split('.')[0].length;
        const numToDivide = +('5' + '0'.repeat(billLength - 2));
        if(final % numToDivide === 0) {
            return final;
        } else {
            const num = Math.trunc(final / numToDivide);
            return (num + 1) * numToDivide;
        }
    }
}
// https://www.codewars.com/kata/57980be93467db22f5000038/train/javascript

function randomNumber(){

    function getRandomCase(){
        let probability = Math.random();
        if(probability < 0.8) return 1;
        else return 2;
    }

    function generateNum(){
        const min = 1;
        const max = 9999;
        return Math.trunc(Math.random() * (max - min)) + min;
    }

    if(getRandomCase() === 1){
        let num = generateNum();
        while(!(num % 3 === 0 || num % 5 === 0)){
            num = generateNum();
        }
        return num;
    } else {
        let num = generateNum();
        while((num % 3 === 0 || num % 5 === 0)){
            num = generateNum();
        }
        return num;
    }
}
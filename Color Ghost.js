// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript

class Ghost{
    constructor(){
        this.colors = ['white', 'yellow', 'purple', 'red'];
    }
    get color(){
        const randomNum = Math.trunc(Math.random() * this.colors.length);
        return this.colors[randomNum];
    }
}

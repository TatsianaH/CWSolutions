// https://www.codewars.com/kata/59e7202ffc3c4952940000a9/train/javascript

function sortRainbow(c){
    if(c.length < 7) return false;
    else {
        const arr = ['red','orange','yellow','green','blue','indigo','violet'];
        return c.every((el, i) => el === arr[i]);
    }
}
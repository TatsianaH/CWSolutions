// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

function killer(obj, arr) {
    for(let key in obj){
        let name = 0;
        for(let i = 0; i < arr.length; i++){
            if(obj[key].includes(arr[i])) name++;
        }
        if(name === arr.length) return key;
    }
}

// 2 variant

function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
}
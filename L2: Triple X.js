// https://www.codewars.com/kata/568dc69683322417eb00002c/train/javascript

function tripleX(str){
    if(str.includes('xxx')){
        for(let i = 0; i < str.length; i++){
            if(str.indexOf('x') === i) return str[i] + str[i + 1] + str[i + 2] === 'xxx';
        }
    }
    return false;
}


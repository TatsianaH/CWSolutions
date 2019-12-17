// https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript

//preload variable: dict

let makeBackronym = function(str){
    let res = '';
    for(let i = 0; i < str.length; i++){
        if(dict[str[i].toUpperCase()]){
            res += dict[str[i].toUpperCase()] + ' ';
        }
    }
    return res.trimRight();
};
//https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript

function getStrings(city){
    city = city.toLowerCase().replace(/[^a-z]/g, '');
    const obj = {};
    for(let i = 0; i < city.length; i++){
        if(!obj[city[i]]) obj[city[i]] = 1;
        else obj[city[i]]++;
    }
    const arr = Object.keys(obj);
    let res = '';
    for(let i = 0; i < arr.length; i++){
        res += arr[i] + ':' + '*'.repeat(obj[arr[i]]) + ','
    }
    return res.slice(0, -1);
}
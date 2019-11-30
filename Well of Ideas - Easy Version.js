// https://www.codewars.com/kata/well-of-ideas-easy-version/train/javascript

function well(x){
    let publish = x.filter(el => el === 'good');
    if(publish.length === 0) return  'Fail!';
    if(publish.length > 0 && publish.length <= 2) return  'Publish!';
    return 'I smell a series!';
}
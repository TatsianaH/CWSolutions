// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls){
    let bag = [];
    for(let i = 0; i < dolls.length; i++){
        if(dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') bag.push(dolls[i]);
        else continue;
        if(bag.length === 3) break;
    }
    return bag;
}
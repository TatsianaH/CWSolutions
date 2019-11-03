//https://www.codewars.com/kata/autocomplete-yay/train/javascript

function autocomplete(input, dict){
  input = input.replace(/[^a-z]/ig, "");
  let l = input.length;
  const arr = [];
  for(let i = 0; i < dict.length; i++){
    if(dict[i].toLowerCase().substr(0, l) === input){
      if(arr.length < 5){
        arr.push(dict[i]);
      }
    }
  }
return arr;
}
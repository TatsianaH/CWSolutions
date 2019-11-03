//https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/train/javascript

function firstDup (s) {
  for (let i = 0; i < s.length; i++){
    for(let j = i + 1; j < s.length; j++){
      if(s[i] === s[j]){
       return s[i];
      } else if (s[i] === s[i].toLowerCase()){
        if(s[i].toUpperCase() === s[j]){
        return ' ';
        }
      } else if(s[i]=== s[i].toUpperCase()){
        if(s[i].toLowerCase() === s[j]){
        return ' ';
        }
      } else {
        return undefined;
      }
    }
  }
}
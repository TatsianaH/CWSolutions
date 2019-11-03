//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

  function isIsogram(str){
    if(str === '') return true;
      str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
      if(str.includes(str[i], i + 1)){
        return false;
      }
    }
    return true;
  }
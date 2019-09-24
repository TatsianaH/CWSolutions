//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

  function isPangram(str){
    let str2 = str.toLowerCase().replace(/\d/g, '').replace(/\W/g, '');
      str2 = str2.split('').filter((el, i)=> i === str2.indexOf(el)).sort().join('').trim();
    let alp = 'abcdefghijklmnopqrstuvwxyz';
    if(str2 === alp){
      return true;
    } else {
      return false;
    }
  }
//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

  function incrementString (str) {
  let res;
    let index = str.search(/[0-9]/);
    if(index === -1){
      return str + '1';
      }
    let num = +(str.slice(index, str.length)) + 1;
        res = str.slice(0, index) + num;
    if(res.length < str.length){
      res = str.slice(0, index) + '0'.repeat(str.length - res.length) + num;
    }
    return res;
  }

//https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

  function toCamelCase(str){
    if(str === '') {
      return '';
    }
      str = str.replace(/-/g, ' ').replace(/_/g, ' ');
      const arr = str.split(' ');
      for(let i = 1; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
      }
    return arr.join('');
  }
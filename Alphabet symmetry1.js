//https://www.codewars.com/kata/alphabet-symmetry/train/javascript

  function solve(arr){
    let arr2 = [];
    let alp = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < arr.length; i++){
      let count = 0;
      for(let j = 0; j < arr[i].length; j++){
        if (j === alp.indexOf(arr[i][j].toLowerCase()) ){
           count++;
        }
      }
        arr2.push(count);
    }
      return arr2;
  }
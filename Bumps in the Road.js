//https://www.codewars.com/kata/bumps-in-the-road/train/javascript

  function bump(x){
    if(!x.match(/n/)) {
      return 'Woohoo!';
      }
    if(x.match(/n/g).length > 15 ){
      return 'Car Dead';
    }
      return 'Woohoo!';
    }
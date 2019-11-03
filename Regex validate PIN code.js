//https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

  function validatePIN (pin) {
    if(pin.length < 4 || pin.length > 6 || pin.length === 5){
      return false;
    }
    if (pin.length === 4 || pin.length === 6){
      let num = pin.match(/[0-9]/g).length;
      if(pin.length === num){
        return true;
      } else {
        return false;
      }
    }
  }

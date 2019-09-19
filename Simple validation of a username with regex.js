//https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/train/javascript

  function validateUsr(username) {
    if(username.length < 4 || username.length > 16){
      return false;
    }
    if(username.match(/[^a-z0-9_]/)) {
      return false;
    }
    return true;
    }
    // 2 case
    function validateUsr(username) {
      if(username.length < 4 || username.length > 16){
        return false;
        }
      if(username.length >= 4 && username.length <= 16){
      let regexp = /[A-Z\s]/;
      let res = regexp.test(username);
      return !res;
    }

    // 3 case

    function validateUsr(username) {
      let res =  /^[a-z0-9_]{4,16}$/.test(username);
      return res;
    }
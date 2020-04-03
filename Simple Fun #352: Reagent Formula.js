// https://www.codewars.com/kata/simple-fun-number-352-reagent-formula/train/javascript

function isValid(f){
  let rule1 = !(f.includes(1) && f.includes(2));
    let rule2 = !(f.includes(3) && f.includes(4));
      let rule3 = f.includes(5) === f.includes(6);
        let rule4 = f.includes(7) || f.includes(8);
  return rule1 && rule2 && rule3 && rule4;
}

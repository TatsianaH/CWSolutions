// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

function validate(password) {
  return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password);
}
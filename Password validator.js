// https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript

const password = str => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str);
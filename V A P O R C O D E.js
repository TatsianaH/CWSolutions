//https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

function vaporcode(string) {
 return string.toUpperCase().split('').join('  ').replace(/\s+/g, '  ').trim();
}
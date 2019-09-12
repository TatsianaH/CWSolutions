//https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript

function alphabetized(s) {
 let res = "";
 for (let i = 97; i < 123; i++)
   for (let j=0; j < s.length; j++)
     if (s[j].toLowerCase().charCodeAt()==i)
     res += s[j];
 return res;
}
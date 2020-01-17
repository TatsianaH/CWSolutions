// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(w) { return w[0] + (w.length - 2) + w[w.length - 1] });
}
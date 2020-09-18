// https://www.codewars.com/kata/581e476d5f59408553000a4b/train/javascript

function length(head) {
    let count = 0;
    while(head) {
        head = head.next;
        count++;
    }
    return count;
}

// https://www.codewars.com/kata/581e476d5f59408553000a4b/train/javascript

// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.
//
// The linked list is defined as follows:
//
//     function Node(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }


function length(head) {
    let count = 0;
    while(head) {
        head = head.next;
        count++;
    }
    return count;
}

// 2 case

function length(head) {
    if (head == null) return 0;
    return 1 + length(head.next);
}
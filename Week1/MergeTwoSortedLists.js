var mergeTwoLists = function(list1, list2) {
    let list = new ListNode(0);
    let prev = list;

    let p1 = list1, p2 = list2;
    while (p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            prev.next = p1;
            p1 = p1.next;
        } else {
            prev.next = p2;
            p2 = p2.next;
        }
        prev = prev.next;
    }

    prev.next = p1 !== null ? p1 : p2;

    return list.next;
};
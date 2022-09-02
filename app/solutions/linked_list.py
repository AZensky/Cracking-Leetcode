reverse_linked_list_solution = """const reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
};"""

merge_two_sorted_lists_solution = """const mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();

    let curr = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = new ListNode(list1.val);
            curr = curr.next;
            list1 = list1.next;
        }
        else {
            curr.next = new ListNode(list2.val);
            curr = curr.next;
            list2 = list2.next;
        }
    }

    while (list1) {
        curr.next = new ListNode(list1.val);
        curr = curr.next;
        list1 = list1.next;
    }

    while (list2) {
        curr.next = new ListNode(list2.val);
        curr = curr.next;
        list2 = list2.next;
    }

    return dummy.next
};"""

palindrome_linked_list_solution = """const isPalindrome = function(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    let left = head;
    let right = prev;

    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
};"""

linked_list_cycle_solution = """const hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) return true;
    }

    return false;

};"""

remove_nth_node_solution = """const removeNthFromEnd = function(head, n) {
    let fast = head;
    let dummy = new ListNode(0, head)
    let slow = dummy;

    while (n > 0) {
        fast = fast.next;
        n--;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};"""

add_two_numbers_solution = """const addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    let sum = 0;
    let carry = 0;

    while (l1 || l2 || sum > 0) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            sum -= 10;
            carry++;
        }
        curr.next = new ListNode(sum);
        sum = carry;
        carry = 0;
        curr = curr.next;

    }

    return dummy.next;
};"""

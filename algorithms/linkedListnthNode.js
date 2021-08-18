/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get(index){
        var count = 0;
        var current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
        return this;
    }
    shift(){
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return this;
    }
    pop(){
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return this;
    }
    remove(n){
        if(!this.head) {
            return undefined;
        }
        var index = this.length - n;
        if(index < 0 || index >= this.length){
            return undefined;
        }else{
            var previosNode = this.get(index);
            var removedNode = previosNode.next;
            previosNode.next = removedNode.next;
            this.length--;
            return this;
        }
    }
}

 var removeNthFromEnd = function(head, n) {
    var list  = new LinkedList()
    console.log(list);
};

removeNthFromEnd([1,2,3,4,5], 2)
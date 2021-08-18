class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail=newNode;
        }this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current
            current = current.next;
        }
        this.tail = newTail;
        newTail.next = null;
        this.length--;
        return current;

    }
    get(index){
        if(index<0 || index>=this.length) return null
        var current = this.head;
        var count = 0;
        while(count !== index){
            current = current.next;
            count++;
        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true
        }else{
            return false
        }
    }
}

var list = new SinglyLinkedList;
list.push("one");
list.push("two");
console.log(list);
list.pop();
console.log(list);
console.log(list.get(0));

console.log(list.set(0,10));
console.log(list.set(1,2));
console.log(list.length);
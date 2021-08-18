class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;  
        this.tail = null;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            
        }this.length++;
        return this;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift(){
        if(!this.head){
            return undefined
        }
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null
        }
        this.length--;
        return oldHead;
    }
    get(index){
        if(index<0 || index>=this.length) return undefined
        var count, current;
        if(index<= this.length/2){
            current = this.head;
            count =0;
            while(count !== index){
                current = current.next;
                count++;
            }
        }else{
            count = this.length-1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }else{
            return false;
        }
    }
    remove(index){
        if(index<0 || index>=this.length) return false
        if(index==0){
            this.shift();
            return true
        }
        if(index==1){
            this.pop();
            return true
        }
        var deletedNode = this.get(index);
        var beforeNode = deletedNode.prev;
        var afterNode = deletedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        deletedNode.prev = null;
        deletedNode.next=null;
        this.length--;
        return deletedNode;
    }
    pop(){
        if(!this.head){
            return undefined
        }
        var removedNode = this.tail;
        if(this.length===1){
            this.head = null;
            this.tail=null;
        }else{
            this.tail = removedNode.prev;
            removedNode.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return removedNode;
    }
}

var db = new DoublyLinkedList;
db.push(5);
console.log(db);
console.log(db.length);
console.log(db.head.val);
db.unshift(7);
db.unshift(0);
db.unshift(1);
db.unshift(2);
db.unshift(3);
console.log(db);
db.shift();
// console.log(db);
console.log(db.get(4))
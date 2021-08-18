class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined
        }
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }this.length++;
        return this;
    }
    get(index){
        if(index < 0|| index>=this.length) return null;
        if(index <= this.length/2){
            var count = 0;
            var current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        }else{
            var count = this.length-1;
            var current =  this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index,val){
        if(index < 0 || index >= this.length) return false
        if(index===0){
            this.unshift(val)
            return true
        }
       if(index == this.length){
            this.push(val)
            return true
        }
            var newNode = new Node(val);
            var beforeNode = this.get(index-1);
            var afterNode = beforeNode.next;
            beforeNode.next = newNode;
            newNode.prev = beforeNode;
            newNode.next = afterNode;
            afterNode.prev = newNode;
            this.length++;
            return true;
    }
    remove(index){
         if(index<0 || index>this.length) return false
         if(index === 0){
             this.shift()
             return true
         }
         if(index === this.length-1){
             this.pop()
             return true
         }
         var oldNode = this.get(index);
         var beforeNode = oldNode.prev;
         var afterNode = oldNode.next;
         beforeNode.next = afterNode;
         afterNode.prev = beforeNode;
         removedNode.next = null;
         removedNode.prev = null;
         this.length--;
         return removedNode;
    }
}

var list = new DoublyLinkedList();
list.push("Hello");
list.push("how");
list.push("are");
console.log(list);
list.pop();
list.pop();
list.insert(0,"Harry");
list.insert(0,"Hermione");
console.log(list.insert(0,"Hermione"));
console.log(list)
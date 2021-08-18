class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let PRIME = 31;
        for(let i=0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length
        }
        return total;
    }
    set(key,value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i=0; i<this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }return undefined;
    }
    values(){
        let valArray = [];
        for(let i=0; i<this.keyMap.length; i++){

        }
    }
}

const ht = new HashTable();
ht.set("how are you?","good");
ht.set("good morning","you too");
ht.set("are we done?","yes");
console.log(ht.get("are we done?"));
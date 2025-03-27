import { LinkedList } from "./linkedLists";

class HashMap{
    constructor(){
        this.map = new Array(16);
        this.loadFactor = 0.8;
        this.capacity = this.map.length;
        this.maxEntry = Math.ceil(this.capacity * this.loadFactor);
        this.currEntry = 0;
    }
    
    //takes a key and produces a hash code with it
    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key,value){
        let hashCode = this.hash(key);

        if(this.map[hashCode] == undefined){
            this.map[hashCode] = new LinkedList();
        }
  
        //check if a specific bucket contains an object with a specific key
        if(this.map[hashCode].contains(key)){
            let index = this.map[hashCode].find(key);
            let node = this.map[hashCode].at(index);
            node.value[key] = value;

        }else{
            this.map[hashCode].append({[key]:value});
            this.currEntry++;
            if(this.currEntry == this.maxEntry){
                let oldEntries = this.entries();
                
                let currSize = this.currEntry;
                let newSize = currSize*2;
                this.map = new Array(newSize);

                this.capacity = newSize;
                this.maxEntry = Math.ceil(this.capacity * this.loadFactor);
                this.currEntry = 0;

                oldEntries.forEach(entry => {
                    this.set(entry[0],entry[1]);
                })
            }
        }
    }

    //get the value of a key
    get(key){
        let hashCode = this.hash(key);
        if(this.map[hashCode] !== undefined && this.map[hashCode].contains(key) !== false){
            let index = this.map[hashCode].find(key);
            let node = this.map[hashCode].at(index);
            return node.value[key];
        }   
        return null
    }

    //check whether the hashmap has the key
    has(key){
        let hashCode = this.hash(key);
        if(this.map[hashCode] != undefined && this.map[hashCode].contains(key) == true){
            return true;
        }
        return false;
    }

    //remove the entry with that key
    remove(key){
        let hashCode = this.hash(key);
        if(this.has(key)){
            let index = this.map[hashCode].find(key);
            this.map[hashCode].removeAt(index);
            this.currEntry--;
            return true
        }
        return false
    }

    //returns the number of keys in the hashmap
    length(){
        return this.currEntry
    }

    //clear the hashmap
    clear(){
        this.map = new Array(16);
    }

    //returns all the keys in the hashmap
    keys(){
        let keys = []
        for(let index in this.map){
            if(index !== undefined){
                let returnedKeys = this.map[index].getKeys();
                keys.push(...returnedKeys);
            }
        }
        return keys;
    }

    //returns all the values in the hashmap
    values(){
        let values = []
        let keys = this.keys();
        keys.forEach(key => {
            values.push(this.get(key));
        })

        return values;
    }

    //return all the key,value pairs in the hashmap
    entries(){
        let entry = [];
        let keys = this.keys();
        let values = this.values();

        for(let i = 0; i < keys.length;i++){
            entry.push([keys[i],values[i]]);
        }

        return entry;
    }

    //shows the hashmap and other useful data for debugging
    show(){
        console.log(this.map);
        console.log(`load factor: ${this.loadFactor}`);
        console.log(`length: ${this.length()}`);
    }


}

export {HashMap}
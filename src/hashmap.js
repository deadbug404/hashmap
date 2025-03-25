import { LinkedList } from "./linkedLists";

class HashMap{
    constructor(){
        this.map = new Array(16);
        this.loadFactor = 0.8;
        this.capacity = this.map.length;
        this.maxEntry = Math.ceil(this.capacity * this.loadFactor);
        this.currEntry = 0;
    }
    

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
            // for adjusting the size of array
            // this.currEntry++;
            // if(this.currEntry == this.maxEntry){
            //     console.log("Doubled");
            //     let currSize = this.map.length;
            //     let newSize = currSize*2;
            //     this.map.length = newSize;
            //     this.capacity = this.map.length;
            //     this.maxEntry = Math.ceil(this.capacity * this.loadFactor)
            // }
        }
    }

    get(key){
        let hashCode = this.hash(key);
        if(this.map[hashCode] !== undefined && this.map[hashCode].contains(key) !== false){
            let index = this.map[hashCode].find(key);
            let node = this.map[hashCode].at(index);
            return node.value[key];
        }   
        return null
    }

    has(key){
        let hashCode = this.hash(key);
        if(this.map[hashCode] != undefined && this.map[hashCode].contains(key) == true){
            return true;
        }
        return false;
    }

    show(){
        console.log(this.map);
    }


}

export {HashMap}
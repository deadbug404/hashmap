import { Node } from "./node";

class LinkedList{

    constructor(){
        this.listHead = null;
    }

    prepend(value){
        let newHead = new Node(value);
        let oldHead = this.listHead;
        if(oldHead == null){
            this.listHead = newHead;
        }else{
            newHead.nextNode = oldHead
            this.listHead = newHead;
        }
    }
    
    append(value){
        if(this.listHead == null){
            this.listHead = new Node(value);
        }else{
            let currNode = this.listHead;
            while(currNode.nextNode != null){
                currNode = currNode.nextNode;
            }
            currNode.nextNode = new Node(value);
        }
    }

    size(){
        let counter = 0;
        let currNode = this.listHead;
        while(currNode != null){
            counter++;
            currNode = currNode.nextNode;        
        }
        return counter;
    }

    head() {
        return this.listHead.value;
    }

    tail(){
        let currNode = this.listHead;
        while(currNode.nextNode != null){
            currNode = currNode.nextNode;        
        }
        return currNode.value;
    }

    at(index){
        let currIndex = 0;
        let currNode = this.listHead;
        while(currNode != null){
            if(currIndex == index){return currNode}
            currNode = currNode.nextNode;  
            currIndex++;      
        }
    }

    pop(){
        let lastIndex = this.size()-2;
        let lastNode = this.at(lastIndex);
        lastNode.nextNode = null;
    }

    contains(key){
        let currNode = this.listHead;
        while(currNode != null){
            let currKey = Object.keys(currNode.value)[0];
            if(currKey == key) {return true}
            currNode = currNode.nextNode;      
        }
        return false
    }

    find(key){
        if(!this.contains(key)){return null}
        let currNode = this.listHead;
        let counter = 0;
        while(currNode != null){
            let currKey = Object.keys(currNode.value)[0];
            if(currKey == key) {return counter}
            currNode = currNode.nextNode;     
            counter++; 
        }
    }

    toString(){
        let currNode = this.listHead;
        let str = ""
        while(currNode != null){
            str += `( ${currNode.value} ) -> `;
            currNode = currNode.nextNode;      
        }
        str += "null";
        return str;
    }

    insertAt(value,index){
        let newNode = new Node(value);
        let currNode = this.listHead;
        let prevNode = null;
        let counter = 0;
        if(index == 0) {
            newNode.nextNode = this.listHead;
            this.listHead = newNode;
            return
        }
        while(currNode != null){
            if(counter == index){
                newNode.nextNode = currNode;
                currNode = newNode;
                prevNode.nextNode = currNode;
                break
            }
            prevNode = currNode;
            currNode = currNode.nextNode;      
            counter++;
        }
    }

    removeAt(index){
        let currNode = this.listHead;
        let prevNode = null;
        let counter = 0;
        while(currNode != null){
            if(counter == index){
                prevNode.nextNode = currNode.nextNode
                break
            }
            prevNode = currNode;
            currNode = currNode.nextNode;      
            counter++;
        }
    }
}

export {LinkedList}
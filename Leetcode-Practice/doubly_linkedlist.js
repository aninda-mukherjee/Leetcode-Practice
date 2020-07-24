//10 -> 5 -> 16

// let myLinkedList = {
//     head: {
//         value:10,
//         next:{
//             value:5,
//             next: {
//                 value:16,
//                 next: null
//             }
//         }
//     }
// }

// class Node {

//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }
class DoublyLinkedList {
    constructor(value){
        this.head ={
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length=1;
    }

    append(value){
        // console.log(value);

        const newNode = {
            value:value,
            next:null,
            prev:null
        };
        newNode.prev = this.tail;
        this.tail.next=newNode;
        this.tail =newNode;
        this.length++;
        return this;
        }   

    prepend(value){
        const newNode ={
            value: value,
            next:null,
            prev:null
        };
        newNode.next=this.head;
        this.head.prev = newNode;
        this.head=newNode;
        this.length++;
        return this;
    }  
    
    insert(index, value) {
        // check param 
        // console.log(this.length);
        if (index >= this.length){
            return this.append(value);
        }

        const newNode = {
            value:value,
            next:null,
            prev:null

        };

        const leader = this.traverseToIndex(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode
        this.length++;
        console.log(this);
        return this.printList()

    } 

    remove (index) {

        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList()
    }

    traverseToIndex(index) {
        // check params

        let counter =0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;

    }
    
    printList(){
        const array =[];
        let currentNode = this.head;
        // console.log(currentNode.value)

        while (currentNode!==null){
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        // console.log("currentNode-->>"+array[3]);
        return array;
    }

}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(162);
// myLinkedList.prepend(1);
myLinkedList.insert(1,9);
// myLinkedList.remove(100);
// console.log(myLinkedList);

// console.log(myLinkedList);
const x= myLinkedList.printList();
console.log(x);
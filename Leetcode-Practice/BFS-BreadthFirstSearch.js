class Node {
    constructor (value) {
        this.left = null;
        this.righ= null;
        this.value = value;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert (value) {
        const newNode = new Node( value);
        if (this.root===null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    //left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }

                    currentNode = currentNode.left;
                } else {
                    //right
                    if(!currentNode.righ) {
                        currentNode.righ = newNode;
                        return this;
                    }
                    currentNode = currentNode.righ;
                }
            }
        }
    }

    lookup(value){

        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value){
                currentNode=currentNode.left;
            }else if (value > currentNode.value){
                currentNode = currentNode.righ;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;

    }

    breadthFirstSearch() {

        let currentNode = this.root;
        let list  = [];
        let queue = [];

        queue.push(currentNode);

        while(queue.length >0) {
            currentNode=queue.shift();
            list.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.righ){
                queue.push(currentNode.righ);
            }
        }


    }

    breadthFirstSearchR(queue, list){

        if (!queue.length){
            return list;
        }

        let currentNode= this.queue.shift();
        list.push(currentNode.value)
        if (currentNode.length) {
            queue.push(currentNode.length);
        }
        if (currentNode.righ) {
            queue.push(currentNode.righ);
        }

        return this.breadthFirstSearchR(queue, list)
    }

    DFSInorder() {
        return traverseInOrder(this.root, [])

    }

    DFSPostorder(){
        return traversePostOrder(this.root, [])
    }

    DFSPreorder() {
        return traversePreOrder(this.root, [])
    }

    

    //remove
}

function traverseInOrder(node, list){

    if(node.left) {
        traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if (node.righ){
        traverseInOrder(node.righ, list)
    }

    return list;
        
}

function traversePreOrder(node, list){

    list.push(node.value)
    if(node.left) {
        traversePreOrder(node.left, list)
    }
    
    if (node.righ){
        traversePreOrder(node.righ, list)
    }

    return list;
        
}

function traversePostOrder(node, list){

    if(node.left) {
        traversePostOrder(node.left, list)
    }
    
    if (node.righ){
        traversePostOrder(node.righ, list)
    }
    list.push(node.value)
    return list;
        
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.breadthFirstSearchR([tree.root], [])
// // console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(59));
console.log(tree.DFSPostorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSInorder());


function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left ===null ? null :
    traverse(node.left);
    tree.righ = node.righ === null ? null :
    traverse(node.righ);
    return tree;
}
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

    //remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(19);
tree.insert(29);
tree.insert(49);
tree.insert(59);
// console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(59));


function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left ===null ? null :
    traverse(node.left);
    tree.righ = node.righ === null ? null :
    traverse(node.righ);
    return tree;
}
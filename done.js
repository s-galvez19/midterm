//Stack original 

class Stack {



constructor(){

this.item = [];

}



push(num){

this.item.push(num);

if (this.item.length < 21)

return "Space Exceeded";


}

forEach(){

this.item.forEach(function(element) {

bst.push(element);

});

}



}

// let stack = new Stack();
// let stack1 = new Stack();
// let stack2 = new Stack();


// stack.push(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);


// stack1.push(11,15,1,6,50,81,2,4,12,8,9,7,77,5,96,63,100,51,20,37);


// stack2.push(1,21,31,41,51,61,71,81,91,100,87,32,47,95,62,3,4,5,7,12);


    
    
    let stack = new Stack();
    
    let stack1 = new Stack();
    
    let stack2 = new Stack();
    
    
    
    stack.push(5);
    
    stack.push(10);
    
    stack.push(15);
    
    stack.push(20);
    
    stack.push(25);
    
    stack.push(30);
    
    stack.push(35);
    
    stack.push(40);
    
    stack.push(45);
    
    stack.push(50);
    
    
    
    
    
    stack1.push(6);
    
    stack1.push(12);
    
    stack1.push(18);
    
    stack1.push(24);
    
    stack1.push(28);
    
    stack1.push(34);
    
    stack1.push(40);
    
    stack1.push(46);
    
    stack1.push(52);
    
    stack1.push(58);
    
    
    
    
    
    stack2.push(8);
    
    stack2.push(16);
    
    stack2.push(24);
    
    stack2.push(30);
    
    stack2.push(36);
    
    stack2.push(45);
    
    stack2.push(56);
    
    stack2.push(65);
    
    stack2.push(79);
    
    stack2.push(80);
    
    
    
    
    
    
    
    function Node(val){
    
    this.value = val;
    
    this.left = null;
    
    this.right = null;
    
    }
    
    
    
    
    
    Node.prototype.insert = function(value){
    
    if(value < this.value && this.left){
    
    this.height--;
    
    if(this.left){
    
    return this.left.insert(value);
    
    }
    
    this.left = node;
    
    }
    
    if(value > this.value && this.left){
    
    this.height++;
    
    if(this.right){
    
    return this.right.insert(value);
    
    }
    
    this.right = node;
    
    }
    
    if(node.value === this.value){
    
    this.duplicates++;
    
    }
    
    }
    
    //Binary Search Tree
    
    
    
    function BinarySearchTree(){
    
    this.root = null;
    
    }
    
    
    
    BinarySearchTree.prototype.push = function(val){
    
    var root = this.root;
    
    
    if(!root){
    
    this.root = new Node(val);
    
    return;
    
    }
    
    
    var currentNode = root;
    
    var newNode = new Node(val); 
    
    
    while(currentNode){
    
    if(val < currentNode.value){
    
    if(!currentNode.left){
    
    currentNode.left = newNode;
    
    break;
    
    }
    
    else{
    
    currentNode = currentNode.left;
    
    }
    
    }
    
    else{
    
    if(!currentNode.right){
    
    currentNode.right = newNode;
    
    break;
    
    }
    
    else{
    
    currentNode = currentNode.right;
    
        }
    }
    
}
    
    
}
    
    
    
    
    var bst = new BinarySearchTree();
    
    
    
    bst.push(stack.forEach());
    
    bst.push(stack1.forEach());
    
    bst.push(stack2.forEach());
    
// - Shift() 
// - Unshift() 
// - Push() 
// - Pop() 
// - Get() 
// - Set() 
// - Insert() 
// - Remove() 
 


class Node{ 
  constructor(val){ // val is the value of the node
    this.val = val; // assign the value to the node
    this.next = null; // set the next node to null cause there is no next node yet
  } 
} 

 
class SinglyLinkedList{ 
    constructor() { 
      this.head = null; // set the head to null
      this.tail = null; // set the tail to null
      this.length = 0; // set the length to 0
    } 
// ----------------------------
    shift(val) { //remove from beginning of list
      if (!this.length) return undefined; //if no elements in the list return undefined
      let removedHead = this.head; // remove the head

      this.head = removedHead.next; // set the head to the next node
      this.length--; // decrement the length
      if (this.length === 0) { // if the length is 0
        this.tail = null; // set the tail to null
        this.head = null; // set the head to null
      }
      return removedHead; // return the removed head
    }

    unshift(val) { //add to beginning of list
      let newNode = new Node(val); // create a new node with the value passed in

      if (!this.length) {
        this.head = newNode; 
        this.tail = newNode; 
      } else {
        newNode.next = this.head; 
        this.head = newNode
      }

      this.length++

      return this
  }

  push(val) {
    let newNode = new Node(val)

    if (!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length++
    console.log('watch this', this)
    return this;
  }

  pop() {
    if (!this.length) return; 

    let current = this.head; 
    let newTail = current; 

    while (current.next) {
      newTail = current; 
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null; 
      this.tail = null; 
    }

    return current; 
  }

  get(index) {
    if (index < 0 || index >= this.length) return 
    let counter = 0; 
    let current = this.head; 

    while (counter !== index) {
      current = current.next; 
      counter++
    }

    return current; 
  }

  set(index, val) {
    let foundNode = this.get(index); 

    if (foundNode) {
      foundNode.val = val;
      return this;  
    }

    return false; 
  }

  insert(index, val) {
  if (index < 0 || index > this.length) return; 
  if (index === this.length) return this.push(val)
  if (index === 0) return this.unshift(val)
  let newNode = new Node(val)
  let prevNode = this.get(index - 1)
  let temp = prev.next; 
  prevNode.next = newNode; 
  newNode.next = temp; 
  this.length++; 
  return this; 
}

remove(index) {
  if (index < 0 || index >= this.length) return; 
  if (index === 0) return this.shift(); 
  if (index === this.length - 1) return this.pop();
  let prevNode = this.get(index - 1)
  let removed = prevNode.next; 
  prev.next = removed.next
  this.length--; 
  return removed;
}

} 
 


//@ Problem #2:  
// Given a linked list, create a method called mostFrequent(this) that returns the node that occurs 
//the most in the list. 
     
// For example, given the following linked list:  
 
// 1 -> 1 -> 2 -> 2 -> 2 -> 3 -> null 
 
// This function should return the node of 2.  
// The function should take in a argument of a linked list and  
// return a value of the node that occurs the most often.  
 
// ** this – referrers to the linked list passed into the method 
 
const mostFrequent = (this) => {
  let mostNode = null; //node with most frequent is set to null
  let highestCount = 0; //highest count is set to 0
  let curr = this.head; //current node is set to the head of the linked list
  //loop through the linked list
  while (curr) { //while on this head node 
    let count = 1; //the count is 1
    let node = curr.next; //move to the next node
//looping again but counting and comparing the values of the nodes    
    while (node) {
      if (node.value === curr.value) { //if the value of the node is equal to the current node value-from above
        count++; //increment the count if they are equal
      }
      node = node.next; //move to the next node
    }
//if the count is greater than the highest count
    if (count > highestCount) {
      highestCount = count; //set the highest count to the count
      mostNode = curr; // and the most node is equal the curent node-from the first while loop (curr)
    }
    
    curr = curr.next; //move to the next node
  }
  
  return mostNode; //return the most frequest node
}


 
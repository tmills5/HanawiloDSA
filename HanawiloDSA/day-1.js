//todo: Problem 1: In 3-4 sentences, please explain what Big O Notation is.

/* Big O Notation is a way to measure code that can scale. It looks at the big picture to measure the complexity which helps in the design and performance of the code. We are looking at the computational difficulty as the data set increases. This is basically how the requirement grow as the input grows. */

//todo: Problem 2: 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//O(n!)- Factorial time - 5


//O(n^2)- Quadratic time - 4

  for(i=0; i<arr.length; i++) {
    for (j=0; j<arr.length; j++) {
      } 
  }

//O(n)- Linear time - 3 

const filterArr = (arr) => {
  return arr.filter()
}

//O(logn)- Logarithmic time - 2


//O(1)- Constant time - 1 

//todo: Problem 3:

/* We care about Big O and code performance because: 1) Time is Money. If our code is slow the user is going to navigate to a different site that performs better. 2) We want to ba to scale our code as our users increase. We want to be able to handle the workload appropriately. 3) It helps simply the complexity of the operations so that we can understand it and adapt it to our needs. */

//todo: Problem 4: 

/* The main problem with performance.now, which is the predecessor of Big O, is that it relies on the CPU and power of the machine running it. The results are not consistent and this is unreliable. */

//todo: Problem 5: 

const someFunction = (arr1) => {
  arr1.push(1).pop() //! O(2)

  for (let i = 0; i < arr1.length; i++) {
  console.log('do something 2')
  } //! O(n)

  for (let i = 0; i < arr1.length; i++) {
  console.log('do something 3')
  } //! O(n)

  for (let i = 0; i < arr1.length; i++) {
    for (let i = 0; i < arr1.length; i++) {
      console.log('do something 3')
    }
  } //! O(n^2)
}

//! O(2) + O(n) + O(n) + O(n^2) = O(2) + 2O(n) + O(n^2) = O(n^2)

//todo: Problem 6: 

const someFunction1 = (arr1) => {
  let sum = arr1[1] + arr[2] //! O(1) mathematical equation so that is constant time

  while (condition) {
    sum = arr[5] + arr[7]
  } //! O(1) ? O(n) it is a math equation but in a while loop

  for (let i = 0; i < arr1.length; i++) {
    for (let i = 0; i < arr1.length; i++) {
      for (let i = 0; i < arr1.length; i++) {
        console.log('do something 3')
      }
    }
  } //! O(n^3) 
}


//todo: Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.

//todo: Problem 8:  In 2-3 sentences, please explain what space complexity is and why we care.

//todo: Problem 9:  Given the following data TYPES, label what the space complexity is for each one:

/* 
  Boolean-Constant
  Undefined-Constant
  Null-Constant
  Number-Constant
  String-Linear
  Array-Linear
  Object-Linear
*/

//todo: Problem 10: Give two reasons when you should use a array and when you should use a object.

/* 
  Array: When you need fast access and ordering
  Object: When order doesn't matter and there is no need for fast access
*/

//todo: Problem 11: Given the following object methods, label what the TIME complexity is for each one:

const obj = {
  name: 'tony'
  }

  //inserting
  obj.age = 44; //! O(1)
  //removing
  delete obj.age; //! O(1)
  //searching 1
  obj.hasOwnProperty['name']  //! O(1) because returns true or false if present
  //searching 2
  for (const prop in obj) { //! O(n) searching through keys
  console.log(obj[prop])
  }
  //accessing
  obj.age //44 //! O(1)
  //retrieving keys
  Object.keys(obj) //! O(n) because it is returning the keys
  //retrieving values
  Object.values(obj) //! O(n) because it is returning the values

//todo: Problem 12: Given the following array methods, label what the TIME complexity is for each one:

const arr2 = [1, 2, 3, 4, 5, 6, 7];

//inserting 1
arr2.push(8) //! O(1)
//inserting 2
arr2.unshift(0) //! O(n)
//removing 1
arr2.pop() //! O(1)
//removing 2
arr2.shift() //! O(n)
//searching 1
const findNumber = arr2.find(num => num === 2) //! O(n)
//searching 2
for (let i = 0; i < arr2.length; i++) {
if (arr2[i] === 2) {
return arr2[i]
}
} //! O(n) still has to loop through the array
//retrieving
const getNumber = arr2[3] //! O(1)
//method 1
const double = arr2.map(num => num * 2) //! O(n)
//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5) //! O(n) changing the indices
//method 3
const getSum = arr2.reduce((total, num) => total + num, 0) //! O(n) has to loop to get the values to calculate the sum
//method 4
for (const num of nums) {
console.log(num * 2)
} //! O(n)  still a loop
//method 5
const convertToString = arr2.join(' ') //! O(n)


//todo: Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of why
//todo: Problem 1: In 3-4 sentences, please explain what Big O Notation is.

//! Big O Notation is a way to measure code that can scale. It looks at the big picture to measure the complexity which helps in the design and performance of the code. We are looking at the computational difficulty as the data set increases. This is basically how the requirement grow as the input grows. */

//todo: Problem 2: 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//O(n!)- Factorial time - 5

//! This is the worst complexity because it is exponential. The traveling salesman problem is an example of this. Finding all the permutations of a set of set.

6!  6 x 5 x 4 x 3 x 2 x 1   //from the slides


//O(n^2)- Quadratic time - 4

//! You increase the size of the input by a multiplication of the input.

  for(i=0; i<arr.length; i++) {
    for (j=0; j<arr.length; j++) {
      } 
  }

//O(n)- Linear time - 3 

//! 1 for 1. for every input you have to do one operation.

arr.forEach((item) => {item*2})

//O(logn)- Logarithmic time - 2

//! Time execution is proportional to the logarithm of the input size. Like a For...of loop that doesn't go through the entire array. Leapfrogging.

for (let i = 1; i < arr.length; i *= 2) {
  console.log('do something')
}

//O(1)- Constant time - 1 

//! Time execution is the same no matter how big or small the input is.

arr.push(11);

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
    sum = arr[5] + arr[7] //! O(1)
  } //! O(n)

  for (let i = 0; i < arr1.length; i++) {
    for (let i = 0; i < arr1.length; i++) {
      for (let i = 0; i < arr1.length; i++) {
        console.log('do something 3')
      }
    }
  } //! O(n^3) 
}

//! O(2n) + O(n) + O(n^3) = O(n^3)

//todo: Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.

/* We can ignore constants because they are not going to affect the overall complexity of the code. When calculating the complexity we are only concerned with the worst case scenario. In the long run the constants are not going to affect the end result by that much. */


//todo: Problem 8:  In 2-3 sentences, please explain what space complexity is and why we care.

/* Space complexity is the amount of space that the code can take up on the system. Since, the system can only run on the amount of given physical memory, we want to use it efficiently. */

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

// 1) 

function findFirstIndexOfNumber(number, array) {
  for (let i = 0; i < array.length; i++) { //! O(n) because it is looping through the array
    if (array[i] === number) { //! O(1) because it is comparing the element to the number
      return i; //! O(1) because it is returning a number
    }
  }
  return -1; //! O(1) because it is returning a number
}

//! TIME COMPLEXITY: O(n) worst case 
//! SPACE COMPLEXITY: O(1) because is is returning a number

// 2) Time Complexity going to be Linear  

function findEachIndexOfNumber(number,array) { 
  let arrayOfIndexes = []; //! O(1) because it is variable assignment

  array.forEach(function(element, index) { //! O(n) because it is looping through the array
    if (element === number) { //! O(1) because it is comparing the element to the number
      arrayOfIndexes.push(index); //! O(1) because it is pushing the index to the array
    }
  });
  return arrayOfIndexes; //! O(1) because it is returning the array
}
//! TIME COMPLEXITY: O(n) worst case
//! SPACE COMPLEXITY: O(n) because it is returning an array

// 3) 

const array = [36, 14, 1, 7, 21];

function higherOrLower(array) {
  if (array[array.length -1 ] > array[0]) { //! O(1) because it is comparing the last element to the first element
      return "Higher"; //! O(1) not changing any other part of the array
    else if (array[array.length -1 ] < array[0]) {
      return "Lower"; //! O(1) not changing any other part of the array
    } else {
      return "Neither"; //! O(1) returning a string
    }
  }
}

//! TIME COMPLEXITY: O(1)...O(4)?
//! SPACE COMPLEXITY: O(n) because it is returning a string?

// 4) 

const array = [1,2,3,4,5,6,7,8];

function determineSumOfSequentialArray(array) { 
  let sum = 0; //! O(1) because it is creating a variable
  for (let i = 0; i < array.length; i++) { sum +=
    array[i]; //! O(log) because looping but also "leapfrogging" with addition assignment operator. 
  }
    return sum; //! O(1) because it is returning a number
}

//! TIME COMPLEXITY: O(logn) worst case
//! SPACE COMPLEXITY: O(1) because it is returning a number

// 5) 

const array = [1,2,3,4,5,6,7,8];

function determineSumOfSequentialArray(array) {
  return array.length * (array.length + 1)/2; //! O(1) because it is returning a number. Math operations are constant time.
}

//! TIME COMPLEXITY: O(1) because it is performing math
//! SPACE COMPLEXITY: O(1) because it is returning a number

// 6) 

function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) {
  let middleIndex = Math.floor((beginIndex + endIndex)/2); //! O(1) because it is assigning a variable and math operations are constant time

    if (array[middleIndex] === number) { //! O(1) because it is comparing the middle index to the number
      return middleIndex; //! O(1) because it is returning a number
    } else if (beginIndex >= endIndex) { //! O(1) because it is comparing the begin and end indices
      return -1; //! O(1) because it is returning a number
    } else if (array[middleIndex] < number) { //! O(1) because it is comparing the middle index to the number
      beginIndex = middleIndex + 1; //! O(1) because it is assigning a variable
      return recursiveBinarySearch(number, array, beginIndex, endIndex);
    } else if (array[middleIndex] > number) { //! O(1) because it is comparing the middle index to the number
      endIndex = middleIndex - 1; //! O(1) because it is assigning a variable
      return recursiveBinary //! i have no idea
  }
}

//! TIME COMPLEXITY: O(logn)? is this a binary search? it gets smaller and smaller right?
//! SPACE COMPLEXITY: O(1) because it is returning a number..i think. this one was hard.

// 7) 

const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76]; 

function compareArrays(array1, array2) {
  let arrayOfPairs = []; //! O(1) because it is assigning a variable
  array1.forEach(function(e, i) {
    array2.forEach(function(e2, i2) {
    if (e === e2) {
      arrayOfPairs.push([i, i2]);
    } //! O(n2) nested loops
  });
});
  return arrayOfPairs; //! O(n) returning an array
}

//! TIME COMPLEXITY: O(n^2) worst case
//! SPACE COMPLEXITY: O(n) because it is returning an array

// 8) 

function sortByValue(array){
  function swap(array, index1, index2) { 
    let temporaryValue = array[index1]; //! O(1) because it is assigning a variable
      array[index1] = array[index2]; //! O(1) because it is assigning a variable
      array[index2] = temporaryValue;  //! O(1) because it is assigning a variable
  }
  let count = 1; //! O(1) because it is assigning a variable
  while (count < array.length) {
    let swapCount = 0;
    for (let i=0; i<array.length-count; i++) {
      if (array[i] > array[i+1]) {
      swap(array, i, i+1);
      swapCount++;
      }
    } //! I'm between O(n^2) because of nested loops and O(logn) somehow I think its "leapfrogging" with the swapCount variable
    count++;
  }
  return array; //! O(n) because it is returning an array
}

//! TIME COMPLEXITY: O(n^2) worst case
//! SPACE COMPLEXITY: O(n) because it is returning an array

// 9) 

function returnDupes(array, array2) { 
  let dupeArray = []; //! O(1) because it is assigning a variable

  array.forEach(function(element) {
    if (array2.includes(element)) {
      dupeArray.push(element);
    } //! O(n) for a loop
  });
  return dupeArray //! O(n) because it is returning an array
}

//! TIME COMPLEXITY: O(n) looping
//! SPACE COMPLEXITY: O(n) because it is returning an array

// 10) 

function sumFilteredData(array) {
  return array.filter(function(element) { //! O(n) because it is looping with filter
    return ((element > 5) && (element < 20)) //! O(1) because it is comparing the element to 5 and 20
    }).reduce(function(valueToAdd, currentValue) { 
    return valueToAdd + currentValue; //! O(1) math operations are constant time
  }, 0);
}

//! TIME COMPLEXITY: O(n) looping worst case
//! SPACE COMPLEXITY: O(n) because it is returning a number
//@ Problem 1: Recursion 
// Write a recursive function called flatTheArray which accepts an array of arrays  
// and returns a new array with all values flattened. 
 
 
const flatTheArray = (arr) => { 
  let output = []; //array holding the output from the nested arrays 
  recursionHelper(0, arr, output); //call the helper function, start at index 0, pass in the array, and the output array
  return output; //return the output array
}

  const recursionHelper = (index, arr, output) => { //helper function to recursively loop through the array
   if (arr.length === 0) return output;    //base case
   if (index >= arr.length) return output; //base case

    if (Array.isArray(arr[index])) {        //if the current index is an array, recursively call the helper function. Array.isArray(valueto be checked) determines if an array
      recursionHelper(0, arr[index], output); // call helper function start at index 0, pass in the current index of the array, and the output array
    } else {
      output.push(arr[index]); //if the current index is not an array, push the value into the output array
    };
      recursionHelper(index + 1, arr, output); //call the helper function again, increment the index by 1
  }



console.log(flatTheArray([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5] 
console.log(flatTheArray([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5] 
console.log(flatTheArray([[1],[2],[3]])) // [1,2,3] 
console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3] 


 
//@ Problem 2: Recursion 
// Write a recursive function called capitalizeWords.  
// Given an array of words, return a new array containing each word capitalized. 
 
 
const capitalizeAllLetters = (array) => { 
    let result = []; //array to hold the output

    const helper = (array) => {
        if (array.length === 0) return result; //base case
        result.push(array[0].toUpperCase()); //push the first index of the array into the result array, capitalized
        helper(array.slice(1)); //call the helper function again, passing in the array minus the first index
    }

    helper(array); //call the helper function, passing in the array
    return result; //return the result array
}

let words = ['tony', 'kim']; 
console.log(capitalizeAllLetters(words)); // ['TONY', 'KIM'] 

 
//@ Problem 3: Recursion 
// example 12: collect Strings 
 
// Write a function called collectStrings which accepts an object and returns  
// an array of all the values in the object that have a typeof string 
 
//collectStrings(obj) // ["foo", "bar", "baz"]) 
 
//recursion with helper 
 
function collectStrings(obj) { 
}

//@ Problem 4: Bubble Sort

// Given the following data structure 
 
const data = [  
  {  
      name: 'John Smith',   
      age: new Map([['age', 88]]),   
      favoriteMovie: [  
          {  
              title: 'Hulk',   
              genre: 'action',   
              rating: 6  
          }  
      ]  
  },  
  {  
      name: 'Tony Kim',   
      age: new Map([['age', 3]]),   
      favoriteMovie: [  
          {  
              title: 'Top Gun',   
              genre: 'action',   
              rating: 10  
          }  
      ]  
  },  
  {  
      name: 'John Smith',   
      age: new Map([['age', 35]]),   
      favoriteMovie: [  
          {  
              title: 'Saw',   
              genre: 'horror',   
              rating: 8  
          }  
      ]  
  }  
]
 
 
// Using the bubble sort, please sort each profile 
// by ascending order for the following properties:  
  //  - age 
  //  - rating 
// *** If you want to know how to retrieve a value from a map,  
// please see https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Global_Objects/Map/get 
 
// age (solution should look like) 
 
const sortedByAge = [  
  {  
      name: 'Tony Kim',   
      age: new Map([['age', 3]]),   
      favoriteMovie: [  
          {  
              title: 'Top Gun',   
              genre: 'action',   
              rating: 10  
          }  
      ]  
  },  
  {  
      name: 'John Smith',   
      age: new Map([['age', 35]]),   
      favoriteMovie: [  
          {  
              title: 'Saw',   
              genre: 'horror',   
              rating: 8  
          }  
      ]  
  }, 
  {  
      name: 'John Smith',   
      age: new Map([['age', 88]]),   
      favoriteMovie: [  
          {  
              title: 'Hulk',   
              genre: 'action',   
              rating: 6  
          }  
      ]  
  } 
] 
 
// favorite movie by rating (solution should look like) 
 
const sortedByRating = [  
  {  
      name: 'John Smith',   
      age: new Map([['age', 88]]),   
      favoriteMovie: [  
          {  
              title: 'Hulk',   
              genre: 'action',   
              rating: 6  
          }  
      ]  
  },  
  {  
      name: 'John Smith',   
      age: new Map([['age', 35]]),   
      favoriteMovie: [  
          {  
              title: 'Saw',   
              genre: 'horror',   
              rating: 8  
          }  
      ]  
  }, 
  {  
      name: 'Tony Kim',   
      age: new Map([['age', 3]]),   
      favoriteMovie: [  
          {  
              title: 'Top Gun',   
              genre: 'action',   
              rating: 10  
          }  
      ]  
  } 
] 

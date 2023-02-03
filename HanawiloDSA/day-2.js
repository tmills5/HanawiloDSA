//todo PROBLEM 1:

/* Implement a function called countUniqueValues, which accepts a sorted array,  
and counts the unique values in the array.  
There can be negative numbers in the array, but it will always be sorted. 
*/

const countUniqueValues = (arr) => { 
  if (arr.length === 0) return 0; //if array is empty return 0
  let i = 0; //counter  
  let j = 1; //pointer

  while(j < arr.length) {
    if(arr[i] !== arr[j]) { //check if numbers not equal
      i++; //move to next element in array if not equal
      arr[i] = arr[j]; //reassigning 
    }
    j++; // moving j up to the net element in the array
  }
  return i + 1; //the count of unique values. adding 1 if i = j 
} 

console.log(countUniqueValues([1,1,1,1,1,2,-3,3])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
console.log(countUniqueValues([1,1,2,2,3,3,3,4,4])) //4

// countUniqueValues([1,1,1,1,1,2]) // 2 
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7 
// countUniqueValues([]) // 0 
// countUniqueValues([-2,-1,-1,0,1]) // 4 
 
//todo PROBLEM 2:

/* 
Write a function called, areThereDuplicates which accepts a array of letters,  
and checks whether there are any duplicates among the argument passed in.   
You can solve this using the frequency counter pattern OR the multiple pointers pattern. 
*/ 
 
const areThereDuplicates = (arrOfLetters) => { 
  //loop through the array of letters and look for duplicates
  //if there are, the neturn true
  //else return false
  // maybe do the same thing as number 1?


  let i = 0; //pointer at position of 0 
  let j = 1; //pointer at position of 1
  while(j<arrOfLetters.length) {
    if(arrOfLetters[i] === arrOfLetters[j]) { //checking if the pointers are identical
      return true;
    }
    j++; //increment the pointer
  }
return false; 
}
//Tests 

 console.log(areThereDuplicates(['a', 'a', 'c', 'd'])) //true 
 console.log(areThereDuplicates(['a', 'b', 'c'])) // false 
// areThereDuplicates(['a', 'a', 'c', 'd']) true 
// areThereDuplicates(['a', 'b', 'c']) // false 
 
 
 
//todo PROBLEM 3:  
 
/*  
Write a function called avgPair.  
Given a sorted array of integers and a target average, determine if there is a pair of values in the 
array  
where the average of the pair equals the target average.  
There may be more than one pair that matches the average target. 
*/ 
 
const avgPair = (arr, avgTarget) => { 
 
} 
 
// Test Cases:  
// avgPair([1,2,3],2.5) true 
// avgPair([1,3,3,5,6,7,10,12,19],8) true 
// avgPair([-1,0,3,4,5,6], 4.1) false 
// avgPair([],4) false 
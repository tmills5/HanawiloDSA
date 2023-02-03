/* Implement a function called countUniqueValues, which accepts a sorted array,  
and counts the unique values in the array.  
There can be negative numbers in the array, but it will always be sorted. 
*/



//  using a for of loop for frequency counter 



const countUniqueValues = (arr) => { 
  if (arr.length === 0) return 0; //if array is empty return 0
  let i = 0; //counter  
  let j = 1; //pointer

  while(j < arr.length) {
    if(arr[i] !== arr[j]) { //check if numbers not equal
      i++; //move to next element in array
      arr[i] = arr[j]; 
    } //check if
    j++;
  }
  return i + 1;
} 

console.log(countUniqueValues([1,1,1,1,1,2,-3,3])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
console.log(countUniqueValues([1,1,2,2,3,3,3,4,4])) //4

countUniqueValues([1,1,1,1,1,2]) // 2 
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7 
countUniqueValues([]) // 0 
countUniqueValues([-2,-1,-1,0,1]) // 4 
 
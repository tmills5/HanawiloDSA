//todo PROBLEM 1:

/* 
Given an array of integers and a number, write a function called maxSubarraySum,  
which finds the maximum sum of a subarray with the length of the number passed to the function. 
Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is 
not. 
*/ 
const maxSubarraySum = (arr, n) => {
  
} 
 
// Test Cases:  
// maxSubarraySum([100,200,300,400], 2) 700 
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) 39  
// maxSubarraySum([-3,4,0,-2,6,-1], 2) 5 
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) 5 
// maxSubarraySum([2,3], 3) null 

//todo PROBLEM 2:

// Given a sorted array of integers, find the first occurrence of a target value.  
// If the target is not found in the array, return -1. 
 
function binarySearchFirstOccurrence(nums, target) { 
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2);
    let middleValue = nums[middleIndex];

    if (middleValue === target) {
      return middleIndex;
    } else if (middleValue < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return -1;
} 


// Test cases 
 
// let nums1 = [1, 2, 3, 4, 5]; 
// let target1 = 3; 
console.log(binarySearchFirstOccurrence([1, 2, 3, 4, 5], 3));
// let expected1 = 2; 
// let result1 = binarySearchFirstOccurrence(nums1, target1); 
// console.assert(result1 === expected1, `Test case 1 failed: expected ${expected1} but got 
//${result1}`); 
 
// let nums2 = [1, 2, 3, 4, 5]; 
// let target2 = 6; 
// let expected2 = -1; 
// let result2 = binarySearchFirstOccurrence(nums2, target2); 
// console.assert(result2 === expected2, `Test case 2 failed: expected ${expected2} but got 
//${result2}`); 
 
// let nums3 = [1, 1, 1, 2, 2, 2, 3, 3, 3]; 
// let target3 = 2; 
// let expected3 = 3; 
// let result3 = binarySearchFirstOccurrence(nums3, target3); 
// console.assert(result3 === expected3, `Test case 3 failed: expected ${expected3} but got 
//${result3}`);


//todo PROBLEM 3:

// Given a string, find the length of the longest substring without repeating characters. 
 
function lengthOfLongestSubstring(s) { 
} 
 
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 
console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1 
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

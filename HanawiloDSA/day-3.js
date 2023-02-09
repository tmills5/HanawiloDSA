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
  let left = 0; //left pointer
  let right = nums.length - 1; //right pointer
  targetOccurrence = -1; //returning -1 if target is not found and the occurrence(index in array of integers) of target if found

  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2); //finding the middle index
    let middleValue = nums[middleIndex]; //assigning the value of the middle index in nums to a variable

    if (middleValue === target) { //if the middle value is equal to the target
      targetOccurrence = middleIndex; //then the targetOccurrence is the middle index but there could be earlier occurrences
      right = middleIndex - 1; //moving the right pointer left to check if there are earlier occurrences. new middle index-dont care about what comes after
    } else if (middleValue < target) { //if the middle value is less than the target
      left = middleIndex + 1; //then move left pointer right 
    } else {
      right = middleIndex - 1;// else keep moving the right closer to the left
    }
  }

  return targetOccurrence; //return occurrence or -1
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
console.log(binarySearchFirstOccurrence([1, 2, 3, 4, 5], 6));
// let expected2 = -1; 
// let result2 = binarySearchFirstOccurrence(nums2, target2); 
// console.assert(result2 === expected2, `Test case 2 failed: expected ${expected2} but got 
//${result2}`); 
 
// let nums3 = [1, 1, 1, 2, 2, 2, 3, 3, 3]; 
// let target3 = 2; 
console.log(binarySearchFirstOccurrence([1, 1, 1, 2, 2, 2, 3, 3, 3], 2));
// let expected3 = 3; 
// let result3 = binarySearchFirstOccurrence(nums3, target3); 
//console.assert(result3 === expected3, `Test case 3 failed: expected ${expected3} but got ${result3}`);


//todo PROBLEM 3:

// Given a string, find the length of the longest substring without repeating characters. 
 
function lengthOfLongestSubstring(s) {
  let start = 0;
  let charMap = {};
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]] >= start) {
      start = charMap[s[i]] + 1;
    }

    charMap[s[i]] = i;
    longest = Math.max(longest, i - start + 1);
  };
  return longest;
} 
 
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 
console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1 
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

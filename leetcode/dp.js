/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: nums = [1,3,2,4,5]
// Output: 2
// Explanation: 
// - When i = 0, j = 1, k = 2, and l = 3, nums[i] < nums[k] < nums[j] < nums[l].
// - When i = 0, j = 1, k = 2, and l = 4, nums[i] < nums[k] < nums[j] < nums[l]. 
// There are no other quadruplets, so we return 2.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
var countQuadruplets = function(nums) {
    
};


// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = Array(nums.length).fill(1);
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        result = Math.max(result, dp[i]);
      }
    }
  }

  return result;
};

console.log(lengthOfLIS([7,7,7,7,7,7,7]));

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(string) {
  let stack = [];
  let toRemove = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(i);
    } else if (string[i] === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        toRemove[i] = 1;
      }
    }
  }

  for (let i = 0; i < stack.length; i++) {
    toRemove[stack[i]] = 1;
  }

  let removedString = '';
  for (let i = 0; i < string.length; i++) {
    if (toRemove[i]) continue;

    removedString += string[i];
  }

  return removedString;
};

console.log(minRemoveToMakeValid('))(('));

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let map = {};
  for (let i = 1; i <= alphabet.length; i++) {
    map[i] = alphabet[i - 1];
  }

  let memoize = {};

  let result = backtracking(0);;
  return result;

  function backtracking(index) {
    if (memoize[index]) {
      return memoize[index];
    }

    if (string[index] === '0') {
      return 0;
    }

    if (index >= string.length - 1) {
      return 1;
    }

    let result = backtracking(index + 1);
    if (map[string.slice(index, index + 2)]) {
      result += backtracking(index + 2);
    }

    memoize[index] = result;

    return result;
  }

};

console.log(numDecodings('27'));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let short = nums1.length < nums2.length ? nums1.length : nums2.length;
  let target = Math.floor((nums1.length + nums2.length) / 2);

  let shorterArray = nums1.length < nums2.length ? nums1 : nums2;
  let longerArray = nums1.length < nums2.length ? nums2 : nums1;

  let chan = (nums1.length + nums2.length) % 2 === 0;


  let left = 0;
  let right = short - 1;
  let i = 0;
  while (true) {
    let middle = Math.floor((right + left) / 2);
    let middleA = target - middle - 2;



    let rightB = shorterArray[middle] || -Infinity;
    let leftB = shorterArray[middle + 1] || Infinity;
    let rightA = longerArray[middleA] || -Infinity;
    let leftA = longerArray[middleA + 1] || Infinity;

    rightB = typeof rightB === 'undefined' ? -Infinity : rightB;
    leftB = typeof leftB === 'undefined' ? -Infinity : leftB;
    rightA = typeof rightA === 'undefined' ? -Infinity : rightA;
    leftA = typeof leftA === 'undefined' ? -Infinity : leftA;


    if (rightB <= leftA && rightA <= leftB) {
      console.log({rightA, rightB, leftA, leftB});
      return chan ?
        (Math.max(rightA, rightB) +  Math.min(leftA, leftB)) / 2 :
        Math.min(leftA, leftB)
    } else if (rightA > leftB) {
      left = left + 1;
    } else {
      right = right - 1;
    }
  }
};

// console.log(findMedianSortedArrays([1,2,3,4,5,6,7], [1,2,3,4,5]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));


// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
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
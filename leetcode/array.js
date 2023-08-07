// You are given an integer array nums containing distinct numbers, and you can perform the following operations until the array is empty:

// If the first element has the smallest value, remove it
// Otherwise, put the first element at the end of the array.
// Return an integer denoting the number of operations it takes to make nums empty.

 

// Example 1:

// Input: nums = [3,4,-1]
// Output: 5

var countOperationsToEmptyArray = function(nums) {
  var map = {};
  var n = nums.length,p=0;
  var ans = n;
  for(let i = 0; i < n; i++){
      map[nums[i]] = i;
  }

  console.log(map);
  
  nums.sort((a,b) => a-b);
  for(let i = 0; i < n; p = map[nums[i++]]){
      if(map[nums[i]]<p){
        console.log(nums[i]);
          ans += n-i;
      }
  }
  return ans
};

console.log(countOperationsToEmptyArray([-19, -11]));
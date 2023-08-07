const max_sub_array_of_size_k = (k, arr) => {
  let left = 0;
  let right = left + k - 1;
  let sum;
  let result = 0;
  while (right < arr.length) {
    if (!sum) {
      sum = 0;
      for (let i = left;i <= right; i++) {
        sum += arr[i];
      }
    } else {
      sum = sum - arr[left - 1] + arr[right];
    }

    if (sum > result) {
      result = sum
    }
    left += 1;
    right += 1;
  }
  return result;
};

console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of si  ze K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);


const smallest_subarray_sum = function(s, arr) {
  // < => add
  // >= => remove
  let left = 0;
  let sum = 0;
  let result = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum = sum + arr[right];
    
    if (sum < s) {
      continue;
    }
    while (sum >= s) {
      result = Math.min(result, right - left + 1);
      sum = sum - arr[left];
      left += 1;
    }
  }

  return result === Infinity ? 0 : result;
};

console.log(`Smallest subarray length: ` + smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2]));
console.log(`Smallest subarray length: ` + smallest_subarray_sum(7, [2, 1, 5, 2, 8]));
console.log(`Smallest subarray length: ` + smallest_subarray_sum(8, [3, 4, 1, 1, 6]));


function longest_substring_with_k_distinct(str, k) {
  let result = 0
  let windowItems = [];
  for (let right = 0; right < str.length; right++) {
    windowItems.push(str[right]);

    if (new Set(windowItems).size <= k) {
      result = Math.max(result, windowItems.length);
    }

    while (new Set(windowItems).size > k) {
      windowItems.shift();
    }
  }
  
  return result;
}


console.log(`Length of the longest substring: `
+ longest_substring_with_k_distinct('araaci', 2));
console.log(`Length of the longest substring: `
+ longest_substring_with_k_distinct('araaci', 1));
console.log(`Length of the longest substring: `
+ longest_substring_with_k_distinct('cbbebi', 3));


// Problem Statement
// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

// Example 1:

// Input: Fruit=['A', 'B', 'C', 'A', 'C']  
// Output: 3  
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
// Example 2:

// Input: Fruit = ['A', 'B', 'C', 'B', 'B', 'C']  
// Output: 5  
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

function fruits_into_baskets(fruits) {
  let result = 0;
  let left = 0;
  let windowItems = {};

  for (let right = 0; right < fruits.length; right++) {
    windowItems[fruits[right]] = windowItems[fruits[right]] ? windowItems[fruits[right]] + 1 : 1;

    if (Object.keys(windowItems).length <= 2) {
      let sum = 0;
      for (let key in windowItems) {
        sum += windowItems[key];
      }
      result = Math.max(result, sum);
    }

    while (Object.keys(windowItems).length > 2) {
      if (windowItems[fruits[left]]) {
        windowItems[fruits[left]] -= 1;
      } 

      if (!windowItems[fruits[left]]) {
        delete windowItems[fruits[left]];
      }
      left += 1;
    }
  }


  return result;
}


console.log(`Maximum number of fruits: `
  + fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
console.log(`Maximum number of fruits: `
  + fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));

// Problem Statement
// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

// Example 1:

// Input: String="aabccbb", k=2  
// Output: 5  
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
// Example 2:

// Input: String="abbcb", k=1  
// Output: 4  
// Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
// Example 3:

// Input: String="abccde", k=1  
// Output: 3  
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
let result;
function length_of_longest_substring(str, k) {
  result = 0;
  let left = 0;
  let windowItems = {};

  for (let right = 0; right < str.length; right++) {
    windowItems[str[right]] = windowItems[str[right]] ? windowItems[str[right]] + 1 : 1;

    check_valid(windowItems, k)

    while (!check_valid(windowItems, k)) {
      if (windowItems[str[left]]) {
        windowItems[str[left]] -= 1;
      } 

      if (!windowItems[str[left]]) {
        delete windowItems[str[left]];
      }
      left += 1;
    }
  }


  return result;
}

function check_valid (items, k) {
  let maxKey = 0;
  let sum = 0;
  for (let key in items) {
    if (items[key] >= maxKey) maxKey = items[key];
    sum += items[key];
  }

  const isValid = sum - maxKey <= k;
  if (isValid && typeof result === 'number' && result < sum) {
    result = sum;
  }

  return sum - maxKey <= k;
}

console.log(length_of_longest_substring('aabccbb', 2));
console.log(length_of_longest_substring('abbcb', 1));
console.log(length_of_longest_substring('abccde', 1));


// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
function longestOnes(nums, k) {
    let left = 0;
    let windowItems = {};
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
      if (!windowItems[nums[right]]) {
        windowItems[nums[right]] = 0;
      }

      windowItems[nums[right]] += 1;

      if (check_valid_one(windowItems, k)) {
        let sum = 0;
        for (const key in windowItems) {
          sum += windowItems[key];
        }

        result = Math.max(result, sum);
      }

      while (!check_valid_one(windowItems, k)) {
        windowItems[nums[left]] -= 1;
        if (windowItems[nums[left] === 0]) {
          delete windowItems[nums[left]];
        }
        left += 1;
      }
    }

    return result;
};

function check_valid_one (items, k) {
  if (!items[0]) return true;

  return items[0] <= k;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(pattern, string) {
  let left = 0;
  let windowItems = {};

  let patternItems = {};

  for (let i = 0; i < pattern.length; i++) {
      if (!patternItems[pattern[i]]) {
          patternItems[pattern[i]] = 0;
      }

      patternItems[pattern[i]] += 1;
  }

  for (let right = 0; right < string.length; right++) {
      if (!windowItems[string[right]]) {
          windowItems[string[right]] = 0;
      }

      windowItems[string[right]] += 1;

      if (valid_items(windowItems, patternItems)) {
          if (match_items(windowItems, patternItems)) return true;
      }

      while (!valid_items(windowItems, patternItems)) {
          windowItems[string[left]] -= 1;
          if (windowItems[string[left]] === 0) {
              delete windowItems[string[left]];
          }
          left += 1;
      }
  }
  return false;
};


function valid_items (windowItems, patternItems) {
  if (Object.keys(windowItems).length === 0) return true;


  for (const key in windowItems) {
      if (!patternItems[key]) return false;
      if (patternItems[key] < windowItems[key]) return false;
  }

  return true;
}

function match_items(windowItems, patternItems) {
  console.log(windowItems);
  if (Object.keys(windowItems).length !== Object.keys(patternItems).length) {
      return false;
  }

  for (const key in windowItems) {
      if (patternItems[key] !== windowItems[key]) return false;
  }

  return true;
}

// console.log(checkInclusion('ab', 'eidbaooo'));
// console.log(`Permutation exist: ${checkInclusion('oidbcaf', 'abc')}`);
// console.log(`Permutation exist: ${checkInclusion('odicf', 'dc')}`);
// console.log(`Permutation exist: ${checkInclusion('bcdxabcdy', 'bcdyabcdx')}`);
// console.log(`Permutation exist: ${checkInclusion('aaacb', 'abc')}`);

var findAnagrams = function(string, pattern) {
    let left = 0;
    let windowItems = {};
    let patternItems = {};
    let valueCount = 0;
    let result = [];

    for (let i = 0; i < pattern.length; i++) {
      if (!patternItems[pattern[i]]) {
          patternItems[pattern[i]] = 0;
      }
      patternItems[pattern[i]] += 1;
    }
    
    for (let right = 0; right < string.length; right++) {
      if (!windowItems[string[right]]) {
        windowItems[string[right]] = 0;
      }

      windowItems[string[right]] += 1;
      valueCount += 1;
      if (valueCount <= pattern.length) {
        if (match_items(windowItems, patternItems)) {
          result.push(left);
        }
      }

      while (valueCount > pattern.length) {
        windowItems[string[left]] -= 1;
        if (!windowItems[string[left]]) {
          delete windowItems[string[left]];
        }
        valueCount -= 1;
        left += 1;
        if (match_items(windowItems, patternItems)) {
          result.push(left);
        }
      }

    }

    return result;
};

// console.log(findAnagrams('ppqp', 'pq'));
// console.log(findAnagrams('abbcabc', 'abc'));

function find_substring(string, pattern) {
  let left = 0;
  let windowItems = {};
  let patternItems = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!patternItems[pattern[i]]) {
        patternItems[pattern[i]] = 0;
    }
    patternItems[pattern[i]] += 1;
  }

  for (let right = 0; right < string.length; right++) {
    if (!windowItems[string[right]]) {
      windowItems[string[right]] = 0;
    }

    windowItems[string[right]] += 1;

    if (check(windowItems, patternItems)) {

    }

    while (!check(windowItems, patternItems)) {
      windowItems[string[left]] -= 1;
      if (windowItems[string[left]] === 0) {
        delete windowItems[string[left]];
      }

      left += 1;
    }

  }



  return string; 
}


// console.log(find_substring('aabdec', 'abc'));
// console.log(find_substring('aabdec', 'abac'));
// console.log(find_substring('abdbca', 'abc'));
// console.log(find_substring('adcad', 'abc'));

// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow (string, pattern) {
  let left = 0;
  let right = 0;
  let windowItems = {};
  let result = '';
  let patternMap = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap[pattern[i]]) {
      patternMap[pattern[i]] = 0;
    }

    patternMap[pattern[i]] += 1;
  }

  for (right = 0; right < string.length; right++) {
    if (!windowItems[string[right]]) {
      windowItems[string[right]] = 0;
    }

    windowItems[string[right]] += 1;

    while (checkValid(windowItems, patternMap) && left <= right) {
      if (!result) {
        result = string.slice(left, right + 1);
      } else {
        result = result.length > right - left + 1
        ? string.slice(left, right + 1)
        : result;
      }
      windowItems[string[left]] -= 1;
      if (windowItems[string[left]] === 0) {
        delete windowItems[string[left]];
      }

      left += 1;
    }
  }

  return result;

  function checkValid (windowItems, patternMap) {
    let keys = Object.keys(patternMap)
    for (let i = 0; i < keys.length; i++) {
      if (!windowItems[keys[i]] ) return false
      if (windowItems[keys[i]] < patternMap[keys[i]]) return false;
    }

    return true;
  }
    
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('ab', 'b'));
console.log(minWindow('a', 'aa'));

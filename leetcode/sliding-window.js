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
function length_of_longest_substring(str, k) {
  let windowStart = 0,
      maxLength = 0,
      maxRepeatLetterCount = 0,
      frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!(rightChar in frequencyMap)) {
          frequencyMap[rightChar] = 0;
      }
      frequencyMap[rightChar] += 1;

      // we don't need to place the maxRepeatLetterCount under the below 'if', see the 
      // explanation in the 'Solution' section above.
      maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

      // current window size is from windowStart to windowEnd, overall we have a letter 
      // which is repeating 'maxRepeatLetterCount' times, this means we can have a window
      //  which has one letter repeating 'maxRepeatLetterCount' times and the remaining 
      // letters we should replace. If the remaining letters are more than 'k', it is the
      // time to shrink the window as we are not allowed to replace more than 'k' letters
      if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
          leftChar = str[windowStart];
          frequencyMap[leftChar] -= 1;
          windowStart += 1;
      }

      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}


console.log(length_of_longest_substring('aabccbb', 2));
console.log(length_of_longest_substring('abbcb', 1));
console.log(length_of_longest_substring('abccde', 1));

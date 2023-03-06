// // Reverse Vowels (easy)
// // Problem Statement
// // Given a string s, reverse only all the vowels in the string and return it.

// // The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
// function reverseVowels(s) {
//   s = s.split('');
//   let pointer1 = 0;
//   let pointer2 = s.length - 1;
//   const vowels = 'ueoaiUEOAI';
//   while (pointer1 <= pointer2) {
//     while (!vowels.includes(s[pointer1]) && pointer1 <= pointer2) {
//       pointer1++;
//     }

//     while (!vowels.includes(s[pointer2]) && pointer1 <= pointer2) {
//       pointer2--;
//     }
//     if (pointer1 <= pointer2) {
//       const temp = s[pointer1];
//       s[pointer1] = s[pointer2];
//       s[pointer2] = temp;
//       pointer1++;
//       pointer2--;
//     }
//   }
//   return s.join('');
// }

// // test cases
// // const s1 = "hello";
// // const expected_output1 = "holle";
// // const actual_output1 = reverseVowels(s1);
// // console.log(actual_output1);
// // console.log("Test Case 1: ", expected_output1 === actual_output1);

// // const s2 = "DesignGUrus";
// // const expected_output2 = "DusUgnGires";
// // const actual_output2 = reverseVowels(s2);
// // console.log("Test Case 2: ", expected_output2 === actual_output2);

// // const s3 = "AEIOU";
// // const expected_output3 = "UOIEA";
// // const actual_output3 = reverseVowels(s3);
// // console.log("Test Case 3: ", expected_output3 === actual_output3);

// // const s4 = "aA";
// // const expected_output4 = "Aa";
// // const actual_output4 = reverseVowels(s4);
// // console.log("Test Case 4: ", expected_output4 === actual_output4);

// // const s5 = "";
// // const expected_output5 = "";
// // const actual_output5 = reverseVowels(s5);
// // console.log("Test Case 5: ", expected_output5 === actual_output5);

// // Valid Palindrome (easy)
// // Problem Statement
// // A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// // Given a string s, return true if it is a palindrome, or false otherwise.
// function isPalindrome (s) {
//   let regExp = /[^a-z]/g;
//   s = s.toLowerCase().replace(regExp, '').split('');
//   let pointer1 = 0;
//   let pointer2 = s.length - 1;
//   while (pointer1 < pointer2) {
//     if (s[pointer1] !== s[pointer2]) return false;

//     pointer1 += 1;
//     pointer2 -= 1;
//   }
//   return true;
// };

// // Test case 1: "A man, a plan, a canal, Panama!"
// // Expected output: true
// console.log(isPalindrome("A man, a plan, a canal, Panama!"));

// // Test case 2: "race a car"
// // Expected output: false
// console.log(isPalindrome("race a car"));

// // Test case 3: "Was it a car or a cat I saw?"
// // Expected output: true
// console.log(isPalindrome("Was it a car or a cat I saw?"));

// // Test case 4: "Madam, in Eden, I'm Adam."
// // Expected output: true
// console.log(isPalindrome("Madam, in Eden, I'm Adam."));

// // Test case 5: "empty string"
// // Expected output: true
// console.log(isPalindrome(""));

// // Valid Anagram (easy)
// // Problem Statement
// // Given two strings s and t, return   true if t is an anagram of s, and false otherwise.

// // An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// function isAnagram (s, t) {
//   const hashS = {};
//   for (const ls of s) {
//     if (!hashS[ls]) {
//       hashS[ls] = 1;
//     } else {
//       hashS[ls] += 1;
//     }
//   }

//   for (const lt of t) {
//     if (!hashS[lt]) {
//       return false;
//     } else {
//       hashS[lt] -= 1;
//     }
//   }

//   return Object.values(hashS).every(number => number === 0);
// }

// // Test case 1
// var s1 = "listen";
// var t1 = "silent";
// console.log(isAnagram(s1, t1)); // Expected output: true

// // Test case 2
// var s2 = "hello";
// var t2 = "world";
// console.log(isAnagram(s2, t2)); // Expected output: false

// // Test case 3
// var s3 = "anagram";
// var t3 = "nagaram";
// console.log(isAnagram(s3, t3)); // Expected output: true

// // Test case 4
// var s4 = "rat";
// var t4 = "car";
// console.log(isAnagram(s4, t4)); // Expected output: false

// // Test case 5
// var s5 = "";
// var t5 = "";
// console.log(isAnagram(s5, t5)); // Expected output: true



// function shortestDistance(words, word1, word2) {
//   let pos1 = -1;
//   let pos2 = -1;
//   let result = Infinity;
//   let detected = false;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === word1) {
//       pos1 = i;
//     }

//     if (words[i] === word2) {
//       pos2 = i;
//     }

//     if (pos1 > -1 && pos2 > -1) {
//       const distance = Math.abs(pos1 - pos2);
//       if (distance < result) {
//         detected = true;
//         result = distance;
//       }
//     }
//   }

//   return detected ? result : -1;
// }

// // Number of Good Pairs (easy)
// // Problem Statement
// // Given an array of integers nums, return the number of good pairs.

// // A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// function numGoodPairs(nums) {
//   let pairCount = 0;
//   let hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (typeof hash[nums[i]] === 'number') {
//       if (i > hash[nums[i]]) {
//         hash[nums[i]] += 1;
//       }
//     } else {
//       hash[nums[i]] = i;
//     }
//   }
//   return pairCount;
// }

// let nums1 = [1, 2, 3, 1, 1, 3];
// let result1 = numGoodPairs(nums1);
// console.log(`Result 1: ${result1} (Expected: 4)`);

// let nums2 = [1, 1, 1, 1];
// let result2 = numGoodPairs(nums2);
// console.log(`Result 2: ${result2} (Expected: 6)`);

// let nums3 = [1, 2, 3];
// let result3 = numGoodPairs(nums3);
// console.log(`Result 3: ${result3} (Expected: 0)`);


// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

let hashTwo = {}
var twoSum = function (nums, target) {
  let pointer1 = 0;
  let pointer2 = nums.length - 1;
  let result = [];
  while (pointer1 < pointer2) {
      if (nums[pointer1] + nums[pointer2] === target) {
        if (!hashTwo[(0 - nums[pointer1] - nums[pointer2]).toString()]) {
            hashTwo[(0 - target).toString()] = 1;
            result.push([nums[pointer1], nums[pointer2]]);
        }
      }

      if (nums[pointer1] + nums[pointer2]  < target) {
          pointer1 += 1;
      } else {
          pointer2 -= 1;
      }
  }

  return result;
}
var threeSum = function(nums) {
  nums = nums.sort();

  let result3 = [];
  let hash = {};
  for (let i = 0; i <= nums.length - 1; i++) {
    if (hash[nums[i.toString()]]) continue;

    console.log(nums[i]);
    hash[nums[i].toString()] = 1;

    let twoSumResults = twoSum(nums.slice(0, i).concat(nums.slice(i + 1, nums.length)), 0 - nums[i]);
    console.log(twoSumResults);

    for (const r of twoSumResults) {
        if (r.length < 2) continue;
        r.push(nums[i]);
        result3.push(r);
    }


  }
  return result3;
};






console.log(threeSum([-1,0,1,2,-1,-4]));


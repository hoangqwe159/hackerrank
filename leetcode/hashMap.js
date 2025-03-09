// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:
// Input:
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
// Constraints:

// 1 <= strs.length <= 104 m
// 0 <= strs[i].length <= 100 n
// strs[i] consists of lowercase English letters.

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
console.log(alphabet.split('').length)

function groupAnagrams(strings) {
  const mapString = {};

  for (const originalString of strings) {
    const encoded = constructTable(originalString);

    if (!mapString[encoded]) {
      mapString[encoded] = [];
    }

    mapString[encoded].push(originalString)
  }

  return Object.values(mapString);

}

function constructTable (string) {
  const arrayTable =  Array(26).fill(0);
  for (const i of string) {
    arrayTable[alphabet.indexOf(i)] += 1
  }

  let result = '';
  for (let i = 0; i < arrayTable.length; i++) {
    if (!arrayTable[i]) continue
    result += alphabet[i] + arrayTable[i]
  }

  return result;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams([""]))


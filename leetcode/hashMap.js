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

// 2405. Optimal Partition of String
// Medium
// Topics
// Companies
// Hint
// Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

// Return the minimum number of substrings in such a partition.

// Note that each character should belong to exactly one substring in a partition.

 

// Example 1:

// Input: s = "abacaba"
// Output: 4
// Explanation:
// Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
// It can be shown that 4 is the minimum number of substrings needed.
// Example 2:

// Input: s = "ssssss"
// Output: 6
// Explanation:
// The only valid partition is ("s","s","s","s","s","s").
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let hash = {}
  let count = 1

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!hash[char]) {
      hash[char] = 0
    }

    hash[char] += 1

    if (hash[char] === 2) {
      hash = {}
      hash[char] = 1
      count++
    }
  }

  return count
};

console.log(partitionString("abacaba"))

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;
å
    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);

    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // update or create
    if (this.map.has(key)) {
        this.map.delete(key);
    } else if (this.map.size >= this.capacity) {
        this.map.delete(this.map.keys().next().value)
    }

    this.map.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
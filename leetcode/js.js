// 2625. Flatten Deeply Nested Array
const flat = (array, depth) => {
  while (depth) {
    let isFlattened = true;

    let len = array.length;
    let i = 0;
    while (i < len) {
      if (Array.isArray(array[i])) {
        const currentLen = array[i].length;
        array.splice(i, 1, ...array[i]);
        i = i + currentLen - 1;
        len = array.length;
        isFlattened = false;
      }

      
      i++;
    }
    
    if (isFlattened) {
      break;
    }
    depth--;
  }

  return array;
};

console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]], 1));

// 2624. Snail Traversal
// Example 1:
// Input: 
// nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// rowsCount = 5
// colsCount = 4
// Output: 
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]
// Example 2:

// Input: 
// nums = [1,2,3,4]
// rowsCount = 1
// colsCount = 4
// Output: [[1, 2, 3, 4]]
// Example 3:

// Input: 
// nums = [1,3]
// rowsCount = 2
// colsCount = 2
// Output: []
// Explanation: 2 multiplied by 2 is 4, and the original array [1,3] has a length of 2; therefore, the input is invalid.
Array.prototype.snail = function(rowsCount, colsCount) {
    
};

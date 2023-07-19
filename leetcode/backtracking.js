/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  backtracking(candidates, target, [], 0);

  return result;

  function backtracking(candidates, target, combination, index) {
    if (target === 0) {
      result.push(combination.slice());
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) {
        continue;
      }

      combination.push(candidates[i]);
      backtracking(candidates, target - candidates[i], combination, i);
      combination.pop();
    }
  }
};
// console.log(combinationSum([2,3,6,7], 7));

// Problem - combinations
// Decision space- numbers from 1 to n without repetation
// Output- all combinatins of numbers from 1 to n of size k


function combination (n, k) {
  let result = [];
  backtracking(result, 0, [], 0);

  return result;

  function backtracking (result, index, combination, size) {
    if (size === k) {
      result.push(combination.slice());
      return;
    }

    for (let i = index; i < n; i++) {
      combination.push(i);
      backtracking(result, i + 1, combination, combination.length);

      combination.pop();
    }
  }
}

// /**
//  * @param {character[][]} board
//  * @param {string} word
//  * @return {boolean}
//  */
// var exist = function(board, word) {
//     let result = [];
//     backtracking([], col, rol);

//     return result;

//     function backtracking(combination, col, rol) {
//       if (combination.join())
//     }
// };


// Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
// Output: 6
// Explanation: 
// The shortest path without eliminating any obstacle is 10.
// The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
// function shortestPath1 (grid, numOfElimination) {
//   let result = -1;
//   backtracking(grid, numOfElimination, [], 0, 0, 0);

//   return result;

//   function backtracking (grid, numOfElimination, combination, i, j, count) {
//     if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1) {
//       return;
//     }

//     if (grid[i][j] === 1 && count >= numOfElimination) {
//       return;
//     }

//     if (grid[i][j] !== 0 && grid[i][j] !== 1) {
//       return;
//     }

//     if (result !== -1 && combination.length > result) {
//       return;
//     }

//     if (i === grid.length - 1 && j === grid[0].length - 1) {
//       result = result === -1 ? combination.length : Math.min(result, combination.length);
//     }

//     if (grid[i][j] === 0) {
//       combination.push([i, j]);
//     } else if (count < numOfElimination) {
//       combination.push([i, j]);
//       count += 1;
//     }

//     let temp = grid[i][j];
//     grid[i][j] = '#';

//     backtracking(grid, numOfElimination, combination, i + 1, j, count);
//     backtracking(grid, numOfElimination, combination, i - 1, j, count);
//     backtracking(grid, numOfElimination, combination, i, j + 1, count);
//     backtracking(grid, numOfElimination, combination, i, j - 1, count);

//     grid[i][j] = temp;
//     combination.pop();
//   }
// };

// let grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]];
// let k = 1;
// console.log(shortestPath1(grid, k));


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// function exist (board, word) {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (backtracking(board, word, i, j, 0)) {
//         return true;
//       }
//     }
//   }

//   return false;

//   function backtracking (board, word, i, j, count) {
//     // Base case
//     if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) {
//       return false;
//     }

//     if (board[i][j] !== word[count]) {
//       return false;
//     }
//     if (count === word.length - 1) {
//       return true;
//     }


//     let temp = board[i][j];
//     board[i][j] = '#';

//     let result = backtracking(board, word, i + 1, j, count + 1) ||
//       backtracking(board, word, i - 1, j, count + 1) ||
//       backtracking(board, word, i, j + 1, count + 1) ||
//       backtracking(board, word, i, j - 1, count + 1);

//     board[i][j] = temp;

//     return result;
//   }
// };

// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
// let word = "SEE";

// console.log(exist (board, word));


// function shortestPath (grid, numOfElimination) {
//   let visited = {};
//   let state = [0, 0, 0, numOfElimination]; // step, i, j, k
//   let queue = [state];
//   let directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];

//   while (queue.length) {
//     let currentState = queue.shift();

//     if (!currentState) return;

//     if (currentState[1] === grid.length - 1 && currentState[2] === grid[0].length - 1) {
//       return currentState[0];
//     }

//     for (const direction of directions) {
//       let newRow = currentState[1] + direction[0];
//       let newCol = currentState[2] + direction[1];

//       if (newRow < 0 || newRow > grid.length - 1 || newCol < 0 || newCol > grid[0].length - 1) {
//         continue;
//       }


//       if (currentState[3] - grid[newRow][newCol] >= 0) {
//         let remainingEliminations = currentState[3] - grid[newRow][newCol];
//         if (!visited[`${newRow}_${newCol}_${remainingEliminations}`]) {
//           visited[`${newRow}_${newCol}_${remainingEliminations}`] = 1;
//           queue.push([currentState[0] + 1, newRow, newCol, remainingEliminations]);
//         }
//       }
//     }
//   }

//   return -1;
// };

// let grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]];
// let k = 1;
// console.log(shortestPath(grid, k));

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(string, wordDict) {
  let hash = {};
  for (const word of wordDict) {
    hash[word] = 1;
  }

  let queue = [0];

  while (queue.length) {
    let currentIndex = queue.shift();

    if (currentIndex === string.length) {
      return true;
    }

    for (let i = currentIndex + 1; i < string.length + 1; i++) {
      if (hash[string.slice(currentIndex, i)]) {
        queue.push(i);
      }
    }
  }
    
};

console.log(wordBreak("leetcode", ["leet","code"])); // true
console.log(wordBreak("applepenapple", ["apple","pen"])); // true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])) //f false


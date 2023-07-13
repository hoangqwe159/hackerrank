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

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let result = [];
    backtracking([], col, rol);

    return result;

    function backtracking(combination, col, rol) {
      if (combination.join())
    }
};

// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))

function shortestPath (grid, quota) {
  if (quota > grid.length - 1 + grid[0].length - 1) {
    return grid.length + grid[0].length - 2;
  }

  let state = [0, 0, quota];
  let queue = [0, state];
  let visited = new Set(state);

  while (queue.length > 0) {
    let currentState = queue.shift();

    if (currentState[0] === grid.length - 1 && currentState[1] === grid[0].length - 1) {

    }

    bfs(grid, quota, currentState[0], currentState[1], visited);


  }

  function bfs(grid, quota, i, j, visited) {

  }
};
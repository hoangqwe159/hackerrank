function champagneTower (water, ci, cj) {
  let grid = [];
  let size = 102;

  for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = 1;
    }
  }

  grid[0][0] = water;
  for (let i = 1; i < grid.length; i++) {
    for (let j = 0; j < 102; j++) {
      let topLeft = grid?.[i - 1]?.[j - 1] || 1;
      let topRight = grid?.[i - 1]?.[j] || 1;

      topLeft = Math.max(topLeft, 1);
      topRight = Math.max(topRight, 1);

      grid[i][j] = (topLeft - 1) / 2 + (topRight - 1) / 2;
    }
  }



  return Math.min(1, grid[ci][cj]);
}

// console.log(champagneTower(100000009, 33, 17))
// console.log(champagneTower(1, 1, 1))

function shortestPath (grid, numOfElimination) {
  let visited = {};
  let state = [0, 0, 0, numOfElimination]; // i, j, step, numOfElimination
  let queue = [state];
  let directions = [[0, 1],[0, -1],[1, 0],[-1, 0]]

  while(queue.length) {
    let currentState = queue.shift();

    if (currentState[0] === grid.length - 1 && currentState[1] === grid[0].length - 1 && currentState[3] >= 0) {
      return  currentState[2];
    }

    for (const direction of directions) {
      let newI = currentState[0] + direction[0];
      let newJ = currentState[1] + direction[1];


      if (newI < 0 || newI > grid.length - 1 || newJ < 0 || newJ > grid[0].length - 1) {
        continue;
      } else {
        let newQuota = currentState[3] - grid[newI][newJ];
        let newStep = currentState[2] + 1;
        if (newQuota >= 0 && !visited[`${newI}_${newJ}_${newQuota}`]) {
          queue.push([newI, newJ, newStep, newQuota]);
          visited[`${newI}_${newJ}_${newQuota}`] = 1;
        }
      }
    }
  }

  return -1;
}

// console.log(shortestPath([[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], 1));
// console.log(shortestPath([[0,0,0]], 1));

function twoCitySchedCost (costs) {
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

  let sum = 0;
  for (let i = 0; i < costs.length; i++) {
    if (i < costs.length / 2) {
      sum += costs[i][0];
    } else {
      sum += costs[i][1];
    }
  }

  return sum;
};

// console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]));

var minRemoveToMakeValid = function(string) {
  let stack = [];
  let toRemove = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(i);
    } else if (string[i] === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        toRemove.push(i);
      }
    }
  }

  let hash = {};
  for (const index of stack) {
    hash[index] = 1;
  }

  for (const index of toRemove) {
    hash[index] = 1;
  }

  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (hash[i]) continue;
    result += string[i];
  }

  return result;
};

// console.log(minRemoveToMakeValid("a)b(c)d"));
// console.log(minRemoveToMakeValid("lee(t(c)o)de)"));

// Basic Calculator III
var calculate = function(string) {
  let currentNumber = 0;
  let operation = '+';
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(Number(string[i]))) {
      currentNumber = currentNumber * 10 + Number(string[i]);
    } else if (string[i] === '(') {
      stack.push(operation);
      currentNumber = 0;
      operation = '+';
    } else if (['+', '-', '*', '/', ')'].includes(string[i])) {
      helper(currentNumber, operation);
      if (string[i] === ')') {
        currentNumber = 0;
        let newNumber = stack.pop();
        while (!Number.isNaN(Number(newNumber))) {
          currentNumber += newNumber;
          newNumber = stack.pop();
        }

        operation = newNumber;
        helper(currentNumber, operation)
      }

      currentNumber = 0;
      operation = string[i];
    }
  }

  helper(currentNumber, operation);

  let sum = 0;
  for (const number of stack) {
    sum += number;
  }

  return sum;


  function helper (number, op) {
    if (op === '+') {
      stack.push(number);
    } else if (op === '-') {
      stack.push(-number);
    } else if (op === '*') {
      stack.push(stack.pop() * number);
    } else if (op === '/') {
      stack.push(stack.pop() / number);
    }
  }
};

// console.log(calculate('1+1*2/2+(1+3*5)'));

var trap = function(height) {
  let maxLeft = [];
  let maxRight = [];

  let current = 0;
  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      maxLeft[i] = 0;
      current = height[i];
    } else {
      maxLeft[i] = current;
      current = Math.max(current, height[i]);
    }
  }

  current = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    if (i === height.length - 1) {
      maxRight[i] = 0;
      current = height[i];
    } else {
      maxRight[i] = current;
      current = Math.max(current, height[i]);
    }
  }

  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    sum += Math.max(Math.min(maxLeft[i], maxRight[i]) - height[i], 0)
  }

  return sum;
};

// console.log(trap([4,2,0,3,2,5]));

var getDirections = function(root, startValue, destValue) {
  let lca = findLCA(root, startValue, destValue);
  let depth = findDepth(lca, startValue, 0);
  let direction = findDirection(lca, destValue, '');

  return 'U'.repeat(depth) + direction;

};

function findLCA (root, startValue, destValue) {
  if (!root) return null;

  if (root.val === startValue || root.val === destValue) return root;

  let left = findLCA(root.left, startValue, destValue);
  let right = findLCA(root.right, startValue, destValue);

  if (left && right) return root;

  return left || right;
}

function findDepth (root, value, depth = 0) {
  if (!root) return 0;

  if (root.left?.val === value) return depth + 1;
  if (root.right?.val === value) return depth + 1;

  return findDepth(root.left, value, depth + 1) || findDepth(root.right, value, depth + 1);
}

function findDirection (root, value, string = '') {
  if (!root) return '';

  if (root.left?.val === value) return string + 'L';
  if (root.right?.val === value) return string + 'R';

  return findDirection(root.left, value, string + 'L') || findDirection(root.right, value, string + 'R');
}

var minMeetingRooms = function(intervals) {
  let startArray = [];
  let endArray = [];

  for (let i = 0; i < intervals.length; i++) {
    startArray[i] = intervals[i][0];
    endArray[i] = intervals[i][1];
  }

  startArray.sort((a, b) => a - b);
  endArray.sort((a, b) => a - b);


  let result = -Infinity;
  let count = 0;
  let endIndex = 0
  for (let i = 0; i < startArray.length; i++) {
    if (startArray[i] < endArray[endIndex]) {
      count += 1;
    } else {
      count -= 1;
      endIndex += 1;
      i -= 1
    }
    result = Math.max(result, count);
  }
  
  return result
};

// console.log(minMeetingRooms([[0,30],[5,10],[15,20]]));
// console.log(minMeetingRooms([[1,5],[8,9],[8,9]]));

var scoreOfParentheses = function(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(0);
    } else {
      let v = stack.pop() || 0;
      let w = stack.pop() || 0;

      stack.push(w + Math.max(v * 2, 1));
    }
  }
  return stack.pop();
};

// console.log(scoreOfParentheses("((((()))))"));

var widthOfBinaryTree = function(root) {
  let previousLevel = 0;
  let previousPoint = 1;
  let state = [root, 1, 0];
  let queue = [state];

  let result = 0;

  while (queue.length) {
    let currentNode = queue.shift();

    if (currentNode[2] > previousLevel) {
      previousLevel = currentNode[2];
      previousPoint = currentNode[1];
    }

    result = Math.max(result, currentNode[1] - previousPoint + 1);

    currentNode[0]?.left && queue.push([currentNode[0].left, currentNode[1] * 2, currentNode[2] + 1]);
    currentNode[0]?.right && queue.push([currentNode[0].right, currentNode[1] * 2 + 1, currentNode[2] + 1]);
  }

  return result;
};

var hasPath = function(maze, start, destination) {
  let visited = {};
  const directions = [[0, 1],[0, -1],[-1, 0],[1, 0]];
  let queue = [start];

  while (queue.length) {
    let currentState = queue.shift();

    if (currentState[0] === destination[0] && currentState[1] === destination[1]) {
      return true;
    }

    for (const direction of directions) {
      let newI = currentState[0] + direction[0];
      let newJ = currentState[1] + direction[1];
      
      while (newI >= 0 && newI <= maze.length - 1 && newJ >= 0 && newJ <= maze[0].length - 1 && maze[newI][newJ] === 0) {
        newI += direction[0];
        newJ += direction[1];
      }

      newI -= direction[0];
      newJ -= direction[1];


      if (!visited[`${newI}_${newJ}`]) {
        queue.push([newI, newJ]);
        visited[`${newI}_${newJ}`] = 1;
      }
    }
  }

  return false;
};

// let maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]];
// let start = [0,4];
// let destination = [3,2];

// console.log(hasPath(maze, start, destination));

var decodeString = function(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ']') {
      stack.push(string[i]);
    } else {
      let currentString = '';

      let top = stack.pop();
      while (top !== '[') {
        currentString = top + currentString;
        top = stack.pop();
      }

      let number = '';
      top = stack.pop();
      while (!Number.isNaN(Number(top))) {
        number = top + number;
        top = stack.pop();
      }

      stack.push(top);
      stack.push(currentString.repeat(Number(number)));
    }
  }

  let result = '';
  for (const char of stack) {
    if (char) result += char;
  }
  return result;
};

// console.log(decodeString("3[a2[c]]"));
// console.log(decodeString("3[a]2[bc]"));

var longestPalindrome = function(string) {
  let dp = Array(string.length).fill(0).map(() => Array(string.length).fill(false));

  for (let i = 0; i < string.length; i++) {
    dp[i][i] = true;
  }

  let ans = [0, 0]
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      dp[i][i + 1] = true;
      ans = [i, i + 1];
    }
  }

  for (let diff = 2; diff < string.length + 1; diff++) {
    for (let i = 0; i < string.length - diff + 1; i++) {
      let j = i + diff - 1;
      if (string[i] === string[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        ans = [i, j];
      }
    }
  }

  return string.slice(ans[0], ans[1] + 1)
};

var numBusesToDestination = function(routes, source, target) {
  if (source === target) return 0;
  let graph = {};
  for (let i = 0; i < routes.length; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].includes(target)) {
      graph[i].push('target');
    }
    for (let j = i + 1; j < routes.length; j++) {
      if (isIntersect(routes[i], routes[j])) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  let queue = [];
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].includes(source)) {
      queue.push([i, 1]);
    }
  }

  let visited = {};
  while (queue.length) {
    let currentState = queue.shift();

    let stop = currentState[0];
    let depth = currentState[1]; 

    if (graph[stop].includes('target')) {
      return depth;
    }

    for (let i = 0; i < graph[stop].length; i++) {
      if (!visited[graph[stop][i]]) {
        queue.push([graph[stop][i], depth + 1]);
        visited[graph[stop][i]] = 1;
      }
    }
  }

  return -1;
};

function isIntersect (a, b) {
  let intersect = a.filter(item => b.includes(item));

  return !!intersect.length;
}

// console.log(numBusesToDestination([[1,2,7],[3,6,7]], 1, 6));
// console.log(numBusesToDestination([[7,12],[4,5,15],[6],[15,19],[9,12,13]], 15, 12));

var findOrder = function(numCourses, prerequisites) {
  let graph = {};
  let inDegree = {};
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
    inDegree[i] = 0;
  }

  for (const prerequisite of prerequisites) {
    let parent = prerequisite[1];
    let child = prerequisite[0];

    graph[parent].push(child);
    inDegree[child] += 1;
  }
  
  let queue = [];
  for (key in inDegree) {
    if (inDegree[key] === 0) queue.push(key);
  }

  let result = [];
  while (queue.length) {
    let currentState = queue.shift();

    result.push(currentState);
    for (const child of graph[currentState]) {
      inDegree[child] -= 1;
      if (inDegree[child] === 0) {
        queue.push(child);
      }
    }
  }

  return result.length === numCourses ? result.map(Number) : [];
};

// console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));

var findAllRecipes = function(recipes, ingredients, supplies) {
  let graph = {};
  let inDegree = {};

  for (let i = 0; i < recipes.length; i++) {
    inDegree[recipes[i]] = ingredients[i].length;

    for (const parent of ingredients[i]) {
      if (!graph[parent]) graph[parent] = [];
      graph[parent].push(recipes[i]);
    }
  }

  console.log(graph);
  let result = [];
  let queue = supplies.slice();

  while (queue.length) {
    let currentState = queue.shift();

    if (recipes.includes(currentState)) {
      result.push(currentState);
    }

    if (graph[currentState]?.length) {
      for (const recipe of graph[currentState]) {
        inDegree[recipe] -= 1;
        if (inDegree[recipe] === 0) {
          queue.push(recipe);
        }
      }
    }
  }

  return result;
};

let recipes = ["bread","sandwich","burger"],
ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], 
supplies = ["yeast","flour","meat"];
// console.log(findAllRecipes(recipes, ingredients, supplies));

var permute = function(nums) {
  let result = [];
  backtracking(nums, []);

  return result;

  function backtracking (nums, combination) {
    if (nums.length === 0) {
      result.push(combination.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      let [ popElement ] = nums.splice(i, 1);

      combination.push(popElement);
      backtracking(nums, combination);

      combination.pop();
      nums.splice(i, 0, popElement);
    }
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 */
var isValidBST = function(root) {
  let isValids = isValid(root, Infinity, -Infinity);

  return !!isValids;

  function isValid(root, min, max) {
    if (!root) return true;

    const isLeftValid = root.left ? root.left.val < root.val : true;
    const isRightValid = root.right ? root.val < root.right.val : true;

    if (isLeftValid && isRightValid) {
      return isValid(root.left) && isValid(root.right)
    }

    return false;
  }
};

// console.log(permute([1,2,3]));
// Example 1:
// Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

// if no such substring exists, return 0.
// Input: s = "aaabb", k = 3
// Output: 3
// Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
// Example 2:

// Input: s = "ababbc", k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

var longestSubstring = function(string, k) {
  let uniqueChar = new Set(string).size;
  let max = 0;

  for (let i = 1; i <= uniqueChar; i++) {
    let start = 0;
    let windowItems = {};
    let currentUnique = 0;
    let currentK = 0;
    for (let end = 0; end < string.length; end++) {
      let char = string[end];
      if (!windowItems[char]) {
        windowItems[char] = 0;
      }

      windowItems[char] += 1;

      if (windowItems[char] === 1) currentUnique += 1;
      if (windowItems[char] === k) currentK += 1;

      while (currentUnique > i) {
        let toRemoveChar = string[start];

        windowItems[toRemoveChar] -= 1;

        if (windowItems[toRemoveChar] === k - 1) currentK -= 1;

        if (windowItems[toRemoveChar] === 0) {
          delete windowItems[toRemoveChar];
          currentUnique -= 1;
        }

        start += 1;
      }

      if (currentK === currentUnique) {
        max = Math.max(max, end - start + 1);
      }
    }
  }
  return max;
}

// console.log(longestSubstring("bbaaacbd", 3)); //3

var canJump = function(nums) {
  let hash = {};

  return backtracking(0);

  function backtracking(index) {
    if (typeof hash[index] !== 'undefined') {
      return hash[index];
    }

    if (index === nums.length - 1) {
      hash[index] = true;
      return true;
    }

    if (nums[index] === 0) {
      hash[index] = false;
      return false;
    }

    for (let i = 1; i <= nums[index]; i++) {
      if (backtracking(index + i)) {
        hash[index + i] = true;
        return true;
      }
    }
    hash[index] = false;
    return false
  }
};

function travelingSalesmanProblem (graph, start) {
  let numsOfCities = graph.length;
  let cities = [];
  for (let i = 0; i < numsOfCities; i++) {
    if (i !== start) cities.push(i);
  }

  let result = [];
  backtracking(cities, []);
  let min = Infinity;
  let routeIndex = 0;
  for (let i = 0; i < result.length; i++) {
    let route = result[i];
    let total = 0;
    for (let j = 0; j < route.length - 1; j++) {
      total += graph[route[j]][route[j + 1]];
    }

    if (total < min) {
      min = total;
      routeIndex = i;
    }
  }

  return {
    route: result[routeIndex],
    minCost: min
  }


  function backtracking (cities, combination) {
    if (cities.length === 0) {
      result.push([start, ...combination.slice(), start]);
      return;
    }

    for (let i = 0; i < cities.length; i++) {
      let [ popElement ] = cities.splice(i, 1);

      combination.push(popElement);
      backtracking(cities, combination);
  
      combination.pop();
      cities.splice(i, 0, popElement);
    }
  }

}

// const graph = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]];
// const start = 0;

// console.log(travelingSalesmanProblem(graph, start))

// Input: nums = [1,3,2,4,5]
// Output: 2
// Explanation: 
// - When i = 0, j = 1, k = 2, and l = 3, nums[i] < nums[k] < nums[j] < nums[l].
// - When i = 0, j = 1, k = 2, and l = 4, nums[i] < nums[k] < nums[j] < nums[l]. 
// There are no other quadruplets, so we return 2.
var countQuadruplets = function (nums) {

  // left of J and smaller than K
  let left = Array(nums.length).fill(0).map(item => Array(nums.length).fill(0));
  // right of K and greater than J

  

  for (let j = 1; j < nums.length - 2; j++) {
    for (let k = j + 1; k < nums.length - 1; k++) {
      if (nums[j] < nums[k]) continue;
      for (let index = 0; index < j; index++) {
        if (nums[index] < nums[k]) {
          left[j][k] += 1;
        }
      }

      for (let index = k + 1; index < nums.length; index++) {
        if (nums[index] > nums[j]) {
          right[j][k] += 1;
        }
      }
    }
  }

  let result = 0;
  for (let j = 1; j < nums.length - 2; j++) {
    for (let k = j + 1; k < nums.length - 1; k++) {
      if (nums[j] > nums[k]) {
        result += left[j][k] * right[j][k];
      }
    }
  }

  return result;
};

// console.log(countQuadruplets([3,9,5,4,8,2,1,10,7,6]));

// Input: jobDifficulty = [6,5,4,3,2,1], d = 2
// Output: 7
// Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
// Second day you can finish the last job, total difficulty = 1.
// The difficulty of the schedule = 6 + 1 = 7 
// Example 2:

// Input: jobDifficulty = [9,9,9], d = 4
// Output: -1
// Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.
// Example 3:

// Input: jobDifficulty = [1,1,1], d = 3
// Output: 3
// Explanation: The schedule is one job per day. total difficulty will be 3.

function minDifficulty (nums, d) {
  let dp = Array(d + 1).fill(-1).map(item => Array(nums.length).fill(-1));

  return dfs(0, d);

  function dfs (index, quota) {
    if (quota === 1) {
      let max = 0;
      for (let i = index; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
      }

      return max;
    }

    if (dp[quota][index] !== -1) return dp[quota][index];

    let max = 0;
    let result = Infinity;
    for (let i = index; i < nums.length - quota + 1; i++) {
      max = Math.max(max, nums[i]);
      result = Math.min(result, max + dfs(i + 1, quota - 1));
    }

    dp[quota][index] = result;
    return dp[quota][index];
  }
}

// console.log(minDifficulty([6,5,4,3,2,1],2));

function sortList (head) {
  if (!head || !head.next) return head;

  let mid = midNode(head);
  let right = mid.next;
  mid.next = null;
  let left = head;

  return mergeList(sortList(left), sortList(right));
}

function midNode (head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function mergeList (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  let temp = new ListNode(0);
  let current = temp;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
      current = current.next;
    } else {
      current.next = list2;
      list2 = list2.next;
      current = current.next;
    }
  }

  current.next = list1 || list2;

  return temp.next;
}

// https://leetcode.com/problems/path-sum-iii
var pathSum = function(root, targetSum) {
  let result = 0;
  let hash = {};

  backtracking(root, 0);

  return result;

  function backtracking (node, currentSum) {
    if (!node) return;

    currentSum += node.val;

    if (currentSum === targetSum) result += 1;

    result += hash[currentSum - targetSum] || 0;

    if (!hash[currentSum]) {
      hash[currentSum] = 0;
    }

    hash[currentSum] += 1;

    backtracking(node.left, currentSum);
    backtracking(node.right, currentSum);

    hash[currentSum] -= 1;
  }
};

// Example 1:

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation: 
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// note: x is undefined => -1.0
// Example 2:

// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
// Example 3:

// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]

// A string s is called happy if it satisfies the following conditions:

// s only contains the letters 'a', 'b', and 'c'.
// s does not contain any of "aaa", "bbb", or "ccc" as a substring.
// s contains at most a occurrences of the letter 'a'.
// s contains at most b occurrences of the letter 'b'.
// s contains at most c occurrences of the letter 'c'.
// Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: a = 1, b = 1, c = 7
// Output: "ccaccbcc"
// Explanation: "ccbccacc" would also be a correct answer.
// Example 2:

// Input: a = 7, b = 1, c = 0
// Output: "aabaa"
// Explanation: It is the only correct answer in this case.

var longestDiverseString = function (a, b, c) {
    
};
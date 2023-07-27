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

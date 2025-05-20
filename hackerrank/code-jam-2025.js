console.log("hello world");

/*
 * Complete the 'count_glitchy_rows' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n1
 *  2. INTEGER m1
 *  3. 2D_INTEGER_ARRAY mat
 */

function count_glitchy_rows(n1, m1, mat) {
  // Write your code here
  let count = 0;
  for (const row of mat) {
    if (row.every((item) => item === 1)) {
      count += 1;
    }
  }

  return count;
}

function mostUniqueDish(array) {
  let map = {};
  let max = -1;
  let maxIndex = -1;

  let map2 = new Map();

  for (const [dish, ingre] of array) {
    if (!map[dish]) {
      map[dish] = 0;
    }

    if (map2.has(`${dish}${ingre}`)) {
      continue;
    }

    map2.set(`${dish}${ingre}`, 1);
    map[dish] += 1;

    if (map[dish] > max) {
      max = map[dish];
      maxIndex = dish;
    }
  }

  return [maxIndex, max];
}

// Finonacci tree
function finonacciTree(n) {
  let memo = {};

  function fib(n) {
    if (memo[n]) {
      return memo[n];
    }
    if (n === 0) {
      return 1;
    }
    if (n === 1) {
      return 1;
    }

    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }

  return fib(n);
}

// Output Format

// A single integer — the highest rating that appears exactly once, or  if there are none.

function highest_unique(picks) {
  let map = {};
  let max = -1;

  for (const pick of picks) {
    if (!map[pick]) {
      map[pick] = 0;
    }
    map[pick] += 1;
  }

  for (const key in map) {
    if (map[key] === 1) {
      max = Math.max(max, key);
    }
  }

  return max;
}

function countAnagramInArray(words) {
  let map = {};
  let count = 0;

  for (const word of words) {
    let sortedWord = word.split("").sort().join("");
    if (!map[sortedWord]) {
      map[sortedWord] = 0;
    }
    map[sortedWord] += 1;
  }

  for (const key in map) {
    if (map[key] > 1) {
      count += (map[key] * (map[key] - 1)) / 2;
    }
  }

  return count;
}

// (yC - yA)/(xC-xA) = (yB-yA)/(xB-xA)
function checkStraightLine(count, pts) {
  let pointA = pts[0];
  let pointB = pts[1];

  for (let i = 2; i < count; i++) {
    let pointC = pts[i];
    if (!check3points(pointA, pointB, pointC)) {
      return false;
    }
  }

  return true;

  function check3points(pointA, pointB, pointC) {
    let yC = pointC[1];
    let yA = pointA[1];

    let xC = pointC[0];
    let xA = pointA[0];

    let yB = pointB[1];
    let xB = pointB[0];

    return (yC - yA) * (xB - xA) === (yB - yA) * (xC - xA);
  }
}

function min_bulk_rotation(N, E, angles, powers) {
  // Write your code here

  // sort powers by angles
  let sorted = [];
  for (let i = 0; i < N; i++) {
    sorted.push([angles[i], powers[i]]);
  }
  sorted.sort((a, b) => a[0] - b[0]);

  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += sorted[i][1];
    if (sum >= E) {
      return sorted[i][0];
    }
  }

  return -1;
}

// helloworld randomwordthatisnotananagram holdweroll
// 2
function count_anagram_in_array(words) {
  words = words.map((word) => word.toLowerCase().replace(/ /g, ""));
  let resultMap = {};
  let max = -1;

  for (const word of words) {
    const anagramObj = wordToAnagramObject(word);
    console.log(anagramObj);
    const key = stringifyObject(anagramObj);
    if (!resultMap[key]) {
      resultMap[key] = 0;
    }
    resultMap[key] += 1;

    if (resultMap[key] > max) {
      max = resultMap[key];
    }
  }

  return max === 1 ? -1 : max;
  function stringifyObject(obj) {
    let sorted = Object.keys(obj).sort().reduce((result, key) => {
      result[key] = obj[key];
      return result;
    }
    , {});

    return JSON.stringify(sorted);
  }

  function wordToAnagramObject(word) {
    const map = {};
    for (const char of word) {
      if (!map[char]) {
        map[char] = 0;
      }
      map[char] += 1;
    }
    return map;
  }
}

count_anagram_in_array(["FOO", "oof", "oof  "]);


function patrol(grid) {
  let result = 0

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
              result += 1
              visit(i, j)
          }
      }
  }

  return result

  function visit(i, j) {
      if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
          return
      }

      if (grid[i][j] === 0) {
          return
      }

      grid[i][j] = 0

      visit(i + 1, j)
      visit(i - 1, j)
      visit(i, j + 1)
      visit(i, j - 1)
  }
};

// find number that does not have prime factors 2, 3, 7
function nthMagicNumber(n) {
  let i = 0;
  let count = 0;
  while (count < n) {
    i++;
    if (isMagic(i)) {
      count++;
    }
  }
  return i;

  function isMagic(num) {
    while (num % 2 === 0) {
      num /= 2;
    }
    while (num % 3 === 0) {
      num /= 3;
    }
    while (num % 7 === 0) {
      num /= 7;
    }
    return num === 1;
  }

}

// function nthMagicNumber(n) {
//   class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     push(val) {
//       this.heap.push(val);
//       this._bubbleUp();
//     }
  
//     pop() {
//       if (this.heap.length === 1) return this.heap.pop();
//       const min = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this._bubbleDown();
//       return min;
//     }
  
//     _bubbleUp() {
//       let index = this.heap.length - 1;
//       while (index > 0) {
//         const parentIndex = Math.floor((index - 1) / 2);
//         if (this.heap[index] >= this.heap[parentIndex]) break;
//         [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//         index = parentIndex;
//       }
//     }
  
//     _bubbleDown() {
//       let index = 0;
//       const length = this.heap.length;
//       const element = this.heap[0];
  
//       while (true) {
//         let leftChildIndex = 2 * index + 1;
//         let rightChildIndex = 2 * index + 2;
//         let swap = null;
  
//         if (leftChildIndex < length) {
//           if (this.heap[leftChildIndex] < element) {
//             swap = leftChildIndex;
//           }
//         }
  
//         if (rightChildIndex < length) {
//           if (
//             (swap === null && this.heap[rightChildIndex] < element) ||
//             (swap !== null && this.heap[rightChildIndex] < this.heap[leftChildIndex])
//           ) {
//             swap = rightChildIndex;
//           }
//         }
  
//         if (swap === null) break;
//         [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
//         index = swap;
//       }
//     }
//   }
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   const heap = new MinHeap();
//   const seen = new Set();
//   const primes = [2, 3, 7];

//   heap.push(1); // Start with the first magic number
//   seen.add(1);

//   let magicNumber = 1;

//   for (let i = 0; i < n; i++) {
//     magicNumber = heap.pop(); // Get the smallest magic number

//     // Generate the next magic numbers by multiplying with primes
//     for (const prime of primes) {
//       const nextMagic = magicNumber * prime;
//       if (!seen.has(nextMagic)) {
//         heap.push(nextMagic);
//         seen.add(nextMagic);
//       }
//     }
//   }

//   return magicNumber;

// }

// MinHeap implementation

// console.log(nthMagicNumber(10)); // Example: 10th magic number

function max_streak_with_one_slip(arr) {
  if (arr.every((item) => item === 0)) {
    return 0;
  }

  if (arr.length === 1) {
    return 1;
  }
  // Write your code here
  const isolated1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && arr[i] === 1 && arr[i + 1] === 0) {
      isolated1.push(i);
    } else if (i === arr.length - 1 && arr[i] === 1 && arr[i - 1] === 0) {
      isolated1.push(i);
    } else if (arr[i] === 1 && arr[i - 1] === 0 && arr[i + 1] === 0) {
      isolated1.push(i);
    }
  }

  for (const index of isolated1) {
    arr[index] = 0;
  }

  return count_max_consecutive_zeros(arr);
  function count_max_consecutive_zeros(arr) {
    let max = 0;
    let count = 0;
    for (const item of arr) {
      if (item === 0) {
        count += 1;
      } else {
        max = Math.max(max, count);
        count = 0;
      }
    }
    return Math.max(max, count);
  }
}

function count_anagram_in_array(words) {
  words = words.map((word) => word.toLowerCase());

  words = removeDuplicates(words);

  words = words.map((word) => {
    return word.split("").sort().join("");
  });

  let map = {};
  for (const word of words) {
    if (!map[word]) {
      map[word] = 0;
    }
    map[word] += 1;
  }

  // sum map with value > 1
  let sum = 0;
  for (const key in map) {
    if (map[key] > 1) {
      sum += map[key];
    }
  }

  return sum;
}

return countMaxiumDuplicate(words);

function removeDuplicates(arr) {
  let map = {};
  let result = [];
  for (const item of arr) {
    if (!map[item]) {
      map[item] = 1;
      result.push(item);
    }
  }
  return result;
}

function countMaxiumDuplicate(arr) {
  let map = {};
  let max = -1;
  for (const item of arr) {
    if (!map[item]) {
      map[item] = 0;
    }
    map[item] += 1;
    max = Math.max(max, map[item]);
  }
  return max;
}

// After having escaped the previous escapade, The Prince of Nothing has transcended and returned for vengeance.

// The Anti-Trallelo System has been installed. Mordret has constructed an

// N DIMENSIONAL HYPERSPHERICAL MIRROR

// And trapped Trallelo inside.

// The process is the same as last time.

// Every time the ray hits the boundary, it reflects perfectly according to the laws of physics (angle of incidence = angle of reflection). You must simulate this process and return the coordinates where the ray lands on the nth bounce, to 3 decimal places.

/*
 * Complete the 'nth_bounce' function below.
 *
 * The function is expected to return a FLOAT_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. INTEGER D
 *  3. FLOAT_ARRAY start_pos
 *  4. FLOAT_ARRAY ray_dir
 */

function nth_bounce(N, D, start_pos, ray_dir) {
  // Write your code here
  let result = [];
  let pos = start_pos;
  let dir = ray_dir;

  for (let i = 0; i < N; i++) {
    let t = 1;
    for (let j = 0; j < D; j++) {
      if (dir[j] > 0) {
        t = Math.min(t, (1 - pos[j]) / dir[j]);
      } else if (dir[j] < 0) {
        t = Math.min(t, (0 - pos[j]) / dir[j]);
      }
    }

    for (let j = 0; j < D; j++) {
      pos[j] += t * dir[j];
      if (pos[j] <= 0 || pos[j] >= 1) {
        dir[j] *= -1;
        pos[j] = Math.max(0, Math.min(1, pos[j]));
      }
    }
  }
  for (let i = 0; i < D; i++) {
    result.push(parseFloat(pos[i].toFixed(3)));
  }
  return result;
}

function countFibonacciNumbers(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  return nums.filter((num) => isFibonacciNumber(num)).length;

  function isFibonacciNumber(number) {
    if (number === 0 || number === 1) {
      return true;
    }
  
    let a = 0;
    let b = 1;
    let c = a + b;
  
    while (c < number) {
      a = b;
      b = c;
      c = a + b;
    }
  
    return c === number;
  }
}

// 10



function queenSearch(n, board) {
  let map = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "Q") {
        map[`${i}${j}`] = 1;
        return moveQueen(board, i, j);
      }
    }
  }

  function moveQueen(board, i, j, step = 0) {
    const positionToMove = [];

    // get cols
    for (let k = 0; k < n; k++) {
      if (k !== j) {
        positionToMove.push([i, k]);
      }
    }

    // get rows
    for (let k = 0; k < n; k++) {
      if (k !== i) {
        positionToMove.push([k, j]);
      }
    }

    // get diagonals pass through i j
    for (let k = 0; k < n; k++) {
      if (k !== i && k !== j) {
        const x = i + k;
        const y = j + k;
        if (x >= 0 && x < n && y >= 0 && y < n) {
          positionToMove.push([x, y]);
        }
      }
    }

    for (let k = 0; k < n; k++) {
      if (k !== i && k !== j) {
        const x = i - k;
        const y = j + k;
        if (x >= 0 && x < n && y >= 0 && y < n) {
          positionToMove.push([x, y]);
        }
      }
    }

    for (let k = 0; k < n; k++) {
      if (k !== i && k !== j) {
        const x = i + k;
        const y = j - k;
        if (x >= 0 && x < n && y >= 0 && y < n) {
          positionToMove.push([x, y]);
        }
      }
    }

    for (let k = 0; k < n; k++) {
      if (k !== i && k !== j) {
        const x = i - k;
        const y = j - k;
        if (x >= 0 && x < n && y >= 0 && y < n) {
          positionToMove.push([x, y]);
        }
      }
    }

    for (const [x, y] of positionToMove) {
      if (!hasPawnLeft(board)) {
        return step;
      }
    
      if (!map[`${x}${y}`]) {
        map[`${x}${y}`] = 1;
        board[x][y] = "Q";
        moveQueen(board, x, y, step + 1);
      }
    }

  }
 
}

function hasPawnLeft(board) {
  return board.some((row) => row.includes("#"));
}


queenSearch(10, [
  "..........",
  "..........",
  ".....##...",
  "....#.....",
  "..........",
  "..........",
  "..........",
  "..........",
  "....Q.....",
  ".........#"
] 

)
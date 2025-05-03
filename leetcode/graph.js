// Definition for a _Node.
function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
// var cloneGraph = function (node) {
//   if (!node) return null;

//   let visited = new Map();
//   function dfs(_node) {
//     if (visited.get(_node)) {
//       return visited.get(_node);
//     }

//     let clonedNode = new _Node(_node.val);
//     visited.set(_node, clonedNode)

//     for (const item of _node.neighbors) {
//       clonedNode.neighbors.push(dfs(item));
//     }

//     return clonedNode;
//   }

//   return dfs(node);
// };

var cloneGraph = function (node) {
  if (!node) return node;
  let queue = [node];
  let visited = new Map();

  visited.set(node, new _Node(node.val));

  while (queue.length) {
    const currentNode = queue.shift();

    for (const neighbor of currentNode.neighbors) {
      if (!visited.get(neighbor)) {
        const cloneNode = new _Node(neighbor.val);

        visited.set(neighbor, cloneNode);
        queue.push(neighbor);
      }
      visited.get(currentNode).neighbors.push(visited.get(neighbor));
    }
  }

  return visited.get(node);
};

const node1 = new _Node(1);
const node2 = new _Node(2);
const node3 = new _Node(3);
const node4 = new _Node(4);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

const clonedGraph = cloneGraph(node1);

console.log(clonedGraph !== node1);
console.log(clonedGraph.neighbors[0] !== node2);
console.log(clonedGraph.neighbors[1] !== node4);
console.log(clonedGraph.neighbors[0].neighbors[0] !== node1);
console.log(clonedGraph.neighbors[0].neighbors[1] !== clonedGraph.neighbors[1]);
console.log(clonedGraph.neighbors[1].neighbors[0] !== node1);
console.log(clonedGraph.val === 1);
console.log(clonedGraph.neighbors[0].val === 2);
console.log(clonedGraph.neighbors[1].val === 4);
console.log(clonedGraph.neighbors.length === 2);

var numIslands = function (grid) {
  let result = 0;
  const visited = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      console.log(visited)

      if (grid[i][j] === '1' && !visited[`${i}_${i}`]) {
        result += 1;
        visitIsland(grid, i, j);
      }
    }
  }

  function visitIsland(grid, i, j) {
    console.log(i);
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1) {
      return;
    }

    if (grid[i][j] === '0' || visited[`${i}_${i}`]) {
      return;
    }

    console.log(visited)

    if (grid[i][j] === "1") {
      visited[`${i}_${i}`] = true;
    }

    visitIsland(grid, i + 1, j);
    visitIsland(grid, i - 1, j);
    visitIsland(grid, i, j - 1);
    visitIsland(grid, i, j + 1);
  }

  return result;
};

console.log(
  numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ])
);

// 207. Course Schedule
// Medium
// Topics
// Companies
// Hint
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let graph = {}
  let inDegree = {}

  for (let i = 0; i < numCourses; i++) {
      inDegree[i] = 0
      graph[i] = []
  }

  for (let [parent, child] of prerequisites) {
      graph[parent].push(child)
      inDegree[child] = inDegree[child] + 1
  }

  let queue = []

  let topologicalSort = []
  for (const child of Object.keys(inDegree)) {
      if (inDegree[child] === 0) queue.push(child)
  }

  while (queue.length) {
      let levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
          let parent = queue.shift()

          topologicalSort.push(parent)

          let children = graph[parent]
          for (let child of children) {
              inDegree[child] -= 1;
              if (inDegree[child] === 0) {
                queue.push(child)
              }
          }

      }
  }

  if (topologicalSort.length !== numCourses) {
      return false
  }

  return true
};

console.log(canFinish(2, [[1, 0]]));


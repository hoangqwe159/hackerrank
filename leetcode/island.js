// 1254. Number of Closed Islands
// Companies
// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands.

 

// Example 1:



// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation: 
// Islands in gray are closed because they are completely surrounded by water (group of 1s).
// let result = 0;
// let processed = false;
// const closedIsland = function(grid) {
  
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === 0) {
//         result += 1;
//         processed = false;
//         visitIsland(grid, i, j);
//       }
//     }
//   }

//   return result;
// };

// const visitIsland = function (grid, i, j) {
//   if (i < 0||j<0||i>=grid.length||j>=grid[0].length) {
//     return;
//   }

//   if (grid[i][j] === 1) {
//     return;
//   }

//   if (grid[i][j] === 0) {
//     grid[i][j] = 1;

//     if ((i === 0 || j === 0 || i === grid.length - 1 || j === grid[0].length - 1) && !processed) {
//       result -= 1;
//       processed = true;
//     }

//     visitIsland(grid, i-1, j);
//     visitIsland(grid, i+1, j);
//     visitIsland(grid, i, j-1);
//     visitIsland(grid, i, j+1);
//   }
// }
// let  grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// console.log(closedIsland(grid));

// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

// Example 1:


// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// let result = 0;
// const islandPerimeter = function(grid) {
//   result = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === 1) {
//         visitIsland(grid, i, j);
//       }
//     }
//   }

//   return result;
// };

// const visitIsland = function (grid, i, j) {
//   if (i < 0||j<0||i>=grid.length||j>=grid[0].length) {
//     return;
//   }

//   if (grid[i][j] === 0) {
//     return;
//   }

//   if (grid[i][j] === 1) {
    
//     result += countSurrounded(grid, i, j);
    
//     grid[i][j] = 2;

//     visitIsland(grid, i-1, j);
//     visitIsland(grid, i+1, j);
//     visitIsland(grid, i, j-1);
//     visitIsland(grid, i, j+1);
//   }
// }

// const countSurrounded = function (grid, i, j) {
//   let count = 4;
//   if (grid[i+1] && grid[i+1][j] > 0) count -= 1;
//   if (grid[i-1] && grid[i-1][j] > 0) count -= 1;
//   if (grid[i][j+1] > 0) count -= 1;
//   if (grid[i][j-1] > 0) count -= 1;

//   console.log(count);
//   return count;
// }
// let  grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]];

// console.log(islandPerimeter(grid));

// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation: 
// Islands in gray are closed because they are completely surrounded by water (group of 1s).
const countIsland = function(grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      visitIsland(grid, i, j)
    }
  }
}

  
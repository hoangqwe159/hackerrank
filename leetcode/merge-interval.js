// // Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// // Output: [[1,6],[8,10],[15,18]]
// // Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// var merge = function(intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   const result = [];
//   let start = intervals[0][0];
//   let end = intervals[0][1];

//   for (let i = 0; i < intervals.length; i++) {
//     if (intervals[i][0] <= end) {
//       end = Math.max(end, intervals[i][1]);
//     } else {
//       result.push([start, end]);
//       start = intervals[i][0];
//       end = intervals[i][1];
//     }
//   }

//   result.push([start, end])
//   return result;
// };

// function insert(intervals, newInterval) {
//   intervals.sort((a, b) => a[0] - b[0]);

//   let start = intervals[0][0];
//   let end = intervals[0][1];
//   let result = [];
//   let isMerged = false;

//   for (let i = 0; i < intervals.length; i++) {
//     if (!isMerged && i < intervals.length - 1) {
//       console.log([start, end]);
//       console.log(i);
//       console.log(isMerged);
//       if (!(end < newInterval[0] || start > newInterval[1])) {
//         console.log([start, end]);
//         start = Math.min(start, newInterval[0]);
//         end = Math.max(end, newInterval[1]);
//         console.log([start, end]);
//         isMerged = true;
//       } else {
//         console.log(i);
//         console.log([start, end]);
//         result.push([start, end]);
//         start = intervals[i+1][0];
//         end = intervals[i+1][1];
//       }
//     } else {
//       if (!(end < intervals[i][0] || start > intervals[i][1])) {
//         start = Math.min(start, intervals[i][0]);
//         end = Math.max(end, intervals[i][1]);
//       } else {
//         result.push([start, end]);
//         start = intervals[i][0];
//         end = intervals[i][1];
//       }
//     }
    
    

//   }

//   result.push([start, end]);


//   return result;
// }

// const intervals =[[1,2],[3,5],[6,7],[8,10],[12,16]];
// const newInterval = [4, 8]

// console.log(insert(intervals, newInterval));

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
function circularArrayRotation(array, k, queries) {
  // Write your code here

}

function re


// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let start = intervals[0][0];
  let end = intervals[0][1];

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      result.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }

  result.push([start, end])
  return result;
};


let intervals = [[1,4],[4,5]]
console.log(merge(intervals));


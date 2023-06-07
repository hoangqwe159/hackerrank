// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let start = intervals[0][0];
  let end = intervals[0][1];
  let result = [];

  for (let i = 1; i < intervals.length; i++) {
    if (!(end < intervals[i][0] || start > intervals[i][1])) {
      start = Math.min(start, intervals[i][0]);
      end = Math.max(end, intervals[i][1]);
    } else {
      result.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }
  result.push([start, end]);

  return result;
}

function insert(intervals, newInterval) {
  intervals.push(newInterval);

  return merge(intervals);
}

const intervals =[[1, 2], [10, 13]];
const newInterval = [6, 8]

console.log(insert(intervals, newInterval));



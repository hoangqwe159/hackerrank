// 452. Minimum Number of Arrows to Burst Balloons
// There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.
// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

// const testCases = [
//   [[10,16],[2,8],[1,6],[7,12]],
//   [[1,2],[3,4],[5,6],[7,8]],
//   [[1,2],[2,3],[3,4],[4,5]],
// ]

const testCases = [
  [
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ],
  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ],
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ],
  [
    [1, 5],
    [2, 5],
    [3, 7],
    [6, 8],
  ],
];

const result = [2, 4, 2, 2];

function findMinArrowShots(points) {
  points.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  let count = 0;
  while (points.length) {
    const currentBallon = points.shift();
    const arrowIndex = currentBallon[1];

    for (let i = 0; i < points.length; i++) {
      if (arrowIndex <= points[i][1] && arrowIndex >= points[i][0]) {
        points.pop();
        i++;
      } else if (arrowIndex > points[1]) {
        break;
      }
    }

    count = count + 1;
  }

  return count;
}

for (let i = 0; i < testCases.length; i++) {
  console.log(findMinArrowShots(testCases[i]) === result[i]);
}

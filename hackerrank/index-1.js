function queenSearch(n, board) {
  let start = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "Q") {
        start.push([i, j]);
      }
    }
  }

  let targets = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "#") {
        targets.push([i, j]);
      }
    }
  }

  // each target can reach each other in 1 or 2 moves (by traveling like the quuen)
  // sort the targets so the sum of move is minimized
  // target = [[i, j], [i, j], [i, j]]
  return greedyQueenPath(start[0], targets);

  function queenMoves(a, b) {
    const [x1, y1] = a;
    const [x2, y2] = b;
    if (x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
      return 1;
    }
    return 2;
  }
  


  function greedyQueenPath(start, targets) {
    let _start = start.slice();

    let sorted = [start];

    while (targets.length > 0) {
      let min = Infinity;
      let minIndex = -1;
      for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        const moves = queenMoves(start, target);
        if (moves < min) {
          min = moves;
          minIndex = i;
        }
      }
      sorted.push(targets[minIndex]);
      start = targets[minIndex];
      targets.splice(minIndex, 1);
    }

    let total = 0;
    sorted[0] = _start;
    for (let i = 0; i < sorted.length - 1; i++) {
      total += queenMoves(sorted[i], sorted[i + 1]);
    }
    return total;
  }
}

// function queenMoves(a, b) {
//   const [x1, y1] = a;
//   const [x2, y2] = b;
//   if (x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
//     return 1;
//   }
//   return 2;
// }

// function permutations(arr) {
//   if (arr.length <= 1) return [arr];

//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
//     for (const perm of permutations(remaining)) {
//       result.push([current, ...perm]);
//     }
//   }
//   return result;
// }

let a = queenSearch(10, [
  "..........",
  "..........",
  ".....##...",
  "....#.....",
  "..........",
  "..........",
  "..........",
  "..........",
  "....Q.....",
  ".........#",
]);

console.log({ a });

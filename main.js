// URL: https://www.hackerrank.com/challenges/non-divisible-subset/problem?isFullScreen=true
// Difficulty: Medium
function nonDivisibleSubset (k, s) {
  // Write your code here
  var r = {};
  var result = 0;
  s = [...new Set (s)];
  for (var i = 0; i < k; i++) {
    r[i] = [];
  }

  for (var i = 0; i < s.length; i++) {
    r[s[i] % k].push (s[i]);
  }

  if (r[0].length !== 0) {
    result = 1;
  }
  //   if (k % 2 === 0 && r[k / 2].length !== 0) {
  //     result += 1;
  //   }
  for (var i = 1; i <= Math.floor (k / 2); i++) {
    if (i === k - i) {
      if (r[i].length > 0) {
        result += 1;
      }
    } else {
      if (r[i].length >= r[k - i].length) {
        result += r[i].length;
      } else {
        result += r[k - i].length;
      }
    }
  }

  return result;
}

// URL: https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
// Difficulty: Easy
function repeatedString (s, n) {
  // Write your code here
    var times = Math.floor(n / s.length);
    var remainder = n % s.length;

    var countRemainder = 0;
    var countTimes = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            countTimes += 1;
        }
    }

    for (var i = 0; i < remainder; i++) {
        if (s[i] === 'a') {
            countRemainder += 1;
        }
    }
    return countTimes * times + countRemainder;

}

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n (size)
 *  2. INTEGER k (# obstacles)
 *  3. INTEGER r_q 
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    // var numDirection = 8;

    // // [rq, 1] [rq 8] [1 cq] [8 cq]
    // //
    // var queen, N, E, S, W;
    // queen = [r_q, c_q];
    // N = [n, c_q];
    // E = [r_q, n];
    // S = [1, c_q];
    // W = [r_q, 1];
    // var distTop = n - r_q;
    // var distRight = n - c_q;
    // var distBot = r_q - 1;
    // var distLeft = c_q - 1;

    // if (distRight > distTop) {
    //     NE = [n, c_q + (n - r_q)];
    //     SE = 
    // } else if (n - c_q < n - r_q) {
    //     NE = [ r_q + (n - c_q), n];
    // } else {
    //     NE = [n, n];
    // }
 
}
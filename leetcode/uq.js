// function is_there_apple(message) {
//   // Write your code here
//   message = message.toLowerCase();
//   const apple = ['a', 'p', 'p', 'l', 'e'];
//   for (let i = 0; i < message.length; i++) {
//     if (message[i] === apple[0]) {
//       apple.shift();
//     }
//   }
//   console.log(apple);
//   return apple.length !== 0 ? '' : 'apple that I am going to eat';
// }

// function MiningCS(directions) {
//   // Write your code here
//   directions = directions.toLowerCase();
//   const map = {
//     r: 'right',
//     l: 'left',
//     j: 'jump',
//     s: 'straight'
//   }

//   let result = '';
//   for (let i = 0; i < directions.length; i++) {
//     if (!map[directions[i]]) {
//       result += 'Aaaaah!\n';
//     } else {
//       result += map[directions[i]] + '\n';
//     }
//   }

//   return result;
// }


// function TwentyOne(sequence) {
//   // Write your code here
//   sequence = sequence.split(' ').join('');
//   let map = {
//     'A': -1,
//     '2': 1,
//     '3': 1,
//     '4': 1,
//     '5': 1,
//     '6': 1,
//     '7': 0,
//     '8': 0,
//     '9': 0,
//     'T': -1,
//     'J': -1,
//     'Q': -1,
//     'K': -1
//   }

//   let sum = 0;
//   for (let i = 0; i < sequence.length; i++) {
//     sum += map[sequence[i]];
//   }
//   return sum;
// }


// function checkValidBrace(str) {
//   // Write your code here
//   const map = {
//     '{': '}'
//   }
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if (map[str[i]]) {
//       stack.push(str[i]);
//     } else {
//       if (map[stack.pop()] !== str[i]) {
//         return 0;
//       }
//     }
//   }
//   return stack.length === 0 ? 1 : 0;
// }

// function abundant_numbers(array) {
//   // Write your code here
//   let r =  array.filter(number => findSumOfDivisor(number) > number);
//   return r;

// }

// function findSumOfDivisor (number) {
//   let sum = 0;
//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
//   return sum;
// }


// console.log(abundant_numbers([3, 12, 18, 17, 4, 3, 20, 18, 30, 29]));

// function lastElementToBeRemoved (array, k) {
//   array = [1,2,3,4,5,6,7,8,9,10,11]
//   k = 2;
//   const expected = 7;

// }

// function Mocking(n, divisors, string) {
//   const result = [];
//   for (let i = 0; i < string.length; i++) {
//     if (divisors.some(divisor => i % divisor === 0)) {
//       string[i] === string[i].toLowerCase() ? result.push(string[i].toUpperCase()) : result.push(string[i].toLowerCase());
//     } else {
//       result.push(string[i]);
//     }
//   }

//   return result.join('');
// }

// function oddity(strings) {
//   // Write your code here
//   const hash = {};
//   let text = '';
//   for (let i = 0; i < strings.length; i++) {
//     text += removeDuplicateLetter(strings[i]);
//   }

//   for (let i = 0; i < text.length; i++) {
//     if (!hash[text[i]]) {
//       hash[text[i]] = 0;
//     } 
//     hash[text[i]] += 1;
//   }

//   var unordered = Object.keys(hash).reduce(function(r, e) {
//     if (hash[e] % 2 === 1) r[e] = hash[e]
//     return r;
//   }, {})

//   const ordered = Object.keys(unordered).sort().reduce(
//     (obj, key) => { 
//       obj[key] = unordered[key]; 
//       return obj;
//     }, 
//     {}
//   );

//   return Object.keys(ordered).join('');
// }

// function removeDuplicateLetter (string) {
//   const hash = {};
//   for (let i = 0; i < string.length; i++) {
//     if (!hash[string[i]]) {
//       hash[string[i]] = 0;
//     }
//     hash[string[i]] += 1;
//   }

//   const result = [];
//   for (let i = 0; i < string.length; i++) {
//     if (hash[string[i]] > 1) {
//       hash[string[i]] -= 1;
//     } else {
//       result.push(string[i]);
//     }
//   }

//   return result.join('');
// }



// function Vrbik(n, arr) {
//   // Write your code here
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let info = arr[i];
//     if (info[0] >= info[1] && info[0] <= info[2]) {
//       result.push(info[0]);
//     } else {
//       result.push(-1);
//     }
//   }
//   return result;
// }

// function intTo32Bit (int) {
//   let result = '';
//   for (let i = 0; i < 32; i++) {
//     result = (int % 2) + result;
//     int = Math.floor(int / 2);
//   }
//   return result;
// }

// function dec2Bin(dec)
// {
//     if(dec > 0) {
//         var res = dec.toString(2);
//         let prefix = new Array(32 - res.length).fill(0).join('');
//         return prefix + res;
//     }
//     else {
//         //make the number positive
//         dec = Math.abs(dec);
//         //get the first compliment
//         var res = dec ^ parseInt((new Array(dec.toString(2).length+1)).join("1"),2);
//         //get the second complimet
//         res =  (res+1).toString(2);
//         let prefix = new Array(32 - res.length).fill(1).join('');
//         return prefix + res;
//     }
// }

// console.log(dec2Bin(-9));
// function flipRightMostOne (bit) {
//   let array = bit.split('');
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] === '1') {
//       array[i] = '0';
//       break;
//     }
//   }
//   return array.join('');
// }

// function bitToInt (bit) {
//   return bit
//   let result = 0;
//   for (let i = 0; i < bit.length; i++) {
//     result += bit[i] * Math.pow(2, bit.length - 1 - i);
//   }
//   return result;
// }

// console.log(bitToInt(flipRightMostOne(dec2Bin(-1))));
// console.log(bitToInt(flipRightMostOne(dec2Bin(4))));

// console.log(((-3 >>> 0).toString(2)));

// // function signedBitToNumber () {
// //   let bit = '11111
// // }


// let a = 10 * 10 + 25 * 25;
// let b = 10 * 10 * 25 - 40 * 40 * 25 * 25;
// let c = 1 / 4 * 10 * 10 * 25 * 25;

// let delta = b * b - 4 * a * c;

// let x1 = (-b + Math.sqrt(delta)) / (2 * a);
// let x2 = (-b - Math.sqrt(delta)) / (2 * a);

// console.log(25 / Math.sqrt(x2));
// console.log(x2);

function jigsaw(x) {
  // Write your code here
  let frequencies = {};
  let intervals = x.split(' ').map(text => {
    let start = ''
    for (let i = 0; i < text.length; i++) {
      if (!/^[0-9]*$/.test(text[i])) break;
      start += text[i];
    }

    let end = ''
    for (let i = text.length - 1; i >= 0; i--) {
      if (!/^[0-9]*$/.test(text[i])) break;
      end += text[i];
    }

    end = end.split('').reverse().join('');

    if (!frequencies[start]) {
      frequencies[start] = 0;
    }
    frequencies[start] += 1;

    if (!frequencies[end]) {
      frequencies[end] = 0;
    }
    frequencies[end] += 1;

    return {start, end, value:  text.replace(/\d+/g, '')}
  
  });

  console.log(intervals);
  console.log(frequencies);

  let start =  Object.keys(frequencies).filter(key => frequencies[key] === 1).filter(b => !!intervals.find(i => i.start === b))[0];
  console.log(start);

  intervals = intervals.sort((a, b) => {
    return a.start - b.start;
  });

  const hash = {};

  for (const interval of intervals) {
    hash[interval.start] = interval.value;
  }

  console.log(hash);

  let result = [];

  while (intervals.find(i => i.start === start)) {
    let current = intervals.find(i => i.start === start);
    result.push(current.value);
    start = current.end;
  }

 return result.join('');
}

function Horsey(x, y, s1, s2) {


  const queue = [];
  const visited = [];
  queue.push([x,y]);
  let minimumTreeDepth = -1;
  while (queue.length > 0) {
    minimumTreeDepth += 1;
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      // check if this is a leaf node
      if (currentNode[0] === s1 && currentNode[1] === s2) {
        return minimumTreeDepth;
      }
      // insert the children of current node in the queue
      travel(queue, [currentNode[0]+1, currentNode[1]+2], visited);
      travel(queue, [currentNode[0]+2, currentNode[1]+1], visited);
      travel(queue, [currentNode[0]+2, currentNode[1]-1], visited);
      travel(queue, [currentNode[0]+1, currentNode[1]-2], visited);
      travel(queue, [currentNode[0]-1, currentNode[1]-2], visited);
      travel(queue, [currentNode[0]-2, currentNode[1]-1], visited);
      travel(queue, [currentNode[0]-2, currentNode[1]+1], visited);
      travel(queue, [currentNode[0]-1, currentNode[1]+2], visited);
    }
  }

  return minimumTreeDepth;
}

function travel (queue, point, visited) {
  if (point[0] < 0 || point[1] < 0 || point[0] > 100 || point[1] > 100) return;
  if (queue.find(p => p[0] === point[0] && p[1] === point[1])) return;
  if (visited.find(p => p[0] === point[0] && p[1] === point[1])) return;

  visited.push(point);
  queue.push(point);
}


console.log(Horsey(0, 0, 0, 1));


function subarray(array) {
  let left = 0;
  let windowItems = [];
  let windowSum = 0;
  let sum = 0;

  for (let right = 0; right < array.length; right++) {
    windowSum += array[right];

    if (windowSum >= sum) {
      sum = windowSum;
    }

    while (windowSum < sum) {
      windowSum -= array[left];
      left++;
    }
  }

  return sum;
}

console.log(subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function topological_sort(vertices, edges) {
  const result = [];

  if (vertices < 0) {
    return result;
  }

  let inDegree = Array(vertices).fill(0);
  let graph = Array(vertices).fill(0).map(() => Array());

  for (const edge of edges) {
    let parent = edge[0];
    let child = edge[1];

    inDegree[child] += 1;
    graph[parent].push(child);
  }

  
  let queue = [];
  for (let i = 0; i < inDegree.length; i++ ) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }



  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      result.push(currentNode);

      for (let j = 0; j < graph[currentNode].length; j++) {
        inDegree[graph[currentNode][j]] -= 1;
        if (inDegree[graph[currentNode][j]] === 0) {
          queue.push(graph[currentNode][j]);
        }
      }
    }
  }

  if (result.length !== vertices) {
    return [];
  }

  return result;
}

console.log(`Topological sort: ${
  topological_sort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ])}`);

console.log(`Topological sort: ${
  topological_sort(5, [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1],
  ])}`);
console.log(`Topological sort: ${
  topological_sort(7, [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1],
  ])}`);

  function find_order(words) {
    let result = [];

    let inDegree = {};
    let graph = {};

    for (const character of words.join('')) {
      inDegree[character] = 0;
      graph[character] = [];
    }

    let added = {};

    for (let i = 0; i < words.length - 1; i++) {
      let currentWord = words[i];
      let nextWord = words[i + 1];

      for (let j = 0; j < Math.min(currentWord.length, nextWord.length); j++) {
        let parent = currentWord[j];
        let child = nextWord[j];

        // If wrong order
        if (nextWord.length < currentWord.length && currentWord.startsWith(nextWord)) {
          return '';
        }

        if (parent !== child) {
          if (!added[`${parent}_${child}`]) {
            added[`${parent}_${child}`] = 1;
            inDegree[child] += 1;
            graph[parent].push(child);
          } 
          break;
        }
      }
    }

    let queue = [];

    for (const key in inDegree) {
      if (inDegree[key] === 0) {
        queue.push(key);
      }
    }


    while (queue.length) {
      let levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        let currentNode = queue.shift();

        result.push(currentNode);

        for (let j = 0; j < graph[currentNode].length; j++) {
          inDegree[graph[currentNode][j]] -= 1;
          if (inDegree[graph[currentNode][j]] === 0) {
            queue.push(graph[currentNode][j]);
          }
        }
      }
    }


    if (result.length !== Object.keys(inDegree).length) {
      return '';
    }

    
    return result.join('');
  }
  
  
  
  console.log(`Character order: ${find_order(["qb","qts","qs","qa","s"])}`);
  
  // console.log(`Character order: ${find_order(['cab', 'aaa', 'aab'])}`);
  
  // console.log(`Character order: ${find_order(['ywx', "wz", 'xww', 'xz',
  // 'zyy', 'zwz'])}`);

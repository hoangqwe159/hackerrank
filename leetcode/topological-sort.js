
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

  /**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {

  let graph = {};

  for (const route of routes) {
    for (let i = 0; i < route.length; i++) {
      let parent = route[i];


      if (!graph[parent]) {
        graph[parent] = [];
      }

      graph[parent] = graph[parent].concat(route)
    }
  }


  let queue = [];
  let visited = {};

  queue.push([1, source])

  while (queue.length) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentState = queue.shift();
      let currentParent = currentState[1];
      let currentChildren = graph[currentParent];

      if (currentParent === target) return currentState[0];

      for (const child of currentChildren) {
        if (child === target) return currentState[0];

        if (!visited[child]) {
          queue.push([currentState[0] + 1, child]);
          visited[child] = 1;
        }
      }
    }

  }

  return -1;
};

console.log(numBusesToDestination([[1,2,7],[3,6,7]], 1, 6));
// console.log(numBusesToDestination( [[7,12],[4,5,15],[6],[15,19],[9,12,13]], 15, 12));
// console.log(numBusesToDestination([[2],[2,8]], 2, 8));

// Input: recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
// Output: ["bread","sandwich","burger"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
// We can create "burger" since we have the ingredient "meat" and can create the ingredients "bread" and "sandwich".
var findAllRecipes = function(recipes, ingredients, supplies) {
  let graph = {};
  let suppliesMap = {};

  for (const supply of supplies) {
    suppliesMap[supply] = 1;
  }


  for (let i = 0; i < ingredients.length; i++) {
    const parent = recipes[i];
    const children = ingredients[i];
    graph[parent] = [];

    for (const child of children) {
      graph[parent].push(child);
    }
  }

  console.log(graph);

  
  let result = [];
  for (const recipe of recipes) {
    if (canCook(recipe, suppliesMap)) result.push(recipe);
  }

  return result;



  function canCook (recipe, suppliesMap) {
    let queue = [recipe];
    console.log(suppliesMap);
    console.log(graph['e']);
    if (checkValid(queue, suppliesMap)) return true;
    let visited = {}
    let checkArray = [];

    while (queue.length) {
      let currentLevel = queue.length;
      for (let i = 0; i < currentLevel; i++) {
        let currentNode = queue.shift();

        if ( graph[currentNode]?.length) {
          for (const child of graph[currentNode]) {
            if (!visited[child]) {
              queue.push(child);
              checkArray.push(child);
              visited[child] = 1;
            }
          }
        } else {
          checkArray.push(currentNode)
        }

      }

      console.log(checkArray);
  
      if (checkValid(checkArray, suppliesMap)) return true;
    }

    return false;
  }

  function checkValid (queue, suppliesMap) {
    if (!queue.length) return false;

    for (const item of queue) {
      if (!suppliesMap[item]) return false;
    }
    console.log(queue);
    console.log(suppliesMap);
    return true;
  }
};

// console.log(findAllRecipes(["bread","sandwich","burger"], [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], ["yeast","flour","meat"] ));
// console.log(findAllRecipes(["bread"], [["yeast","flour"]], ["yeast","flour","corn"] ));
// console.log(findAllRecipes(["bread"], [["yeast","flour"]], ["yeast"] ));
console.log(findAllRecipes(
  ["ju","fzjnm","x","e","zpmcz","h","q"],
  [["d"],["hveml","f","cpivl"],["cpivl","zpmcz","h","e","fzjnm","ju"],["cpivl","hveml","zpmcz","ju","h"],["h","fzjnm","e","q","x"],["d","hveml","cpivl","q","zpmcz","ju","e","x"],["f","hveml","cpivl"]],
  ["f","hveml","cpivl","d"] ));



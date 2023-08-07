var longestSubstring = function(string, k) {
  let left = 0;
  let right = 0;
  let windowItems = {};
  let result = 0;

  for (right = 0; right < string.length; right++) {

    if (!windowItems[string[right]]) {
      windowItems[string[right]] = 0;
    }

    windowItems[string[right]] += 1;
    let added = false;

    while (checkValid(windowItems, k)) {
      added = true;
      right += 1

      if (!windowItems[string[right]]) {
        windowItems[string[right]] = 0;
      }
  
      windowItems[string[right]] += 1;
    }

    if (added) {
      windowItems[string[right]] -= 1;
      if (!windowItems[string[right]]) {
        delete windowItems[string[right]];
      }
      right -= 1;
    }

    while (left < right && checkValid(windowItems, k)) {
      


      result = Math.max(result, right - left + 1);

      windowItems[string[left]] -= 1;
      if (!windowItems[string[left]]) {
        delete windowItems[string[left]];
      }

      left += 1;
    }

  }

  return result;


  function checkValid (windowItems, k) {
    let sum = Infinity;

    for (const key of Object.keys(windowItems)) {
      sum = Math.min(sum, windowItems[key]);
    }


    return sum >= k;
  }
};

console.log(longestSubstring("ababbc", 2))
// URL: https://leetcode.com/problems/two-sum/
// Description: Two Sum
// Difficulty: Easy
// Solution: HashTable
const twoSum = function (numbers, target) {
	const hashTable = {};
	for (let i = 0; i < numbers.length; i++) {
		let toFind = target - numbers[i];
		if (hashTable[toFind] !== undefined) {
			return [hashTable[toFind], i];
		}
		hashTable[numbers[i]] = i;
	}
};

// URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Description: Best Time to Buy and Sell Stock
// Difficulty: Easy
// Solution:
const maxProfit = function(prices) {
    let maxPrice = - Infinity;
		let minPrice = Infinity;
		for (let i = 0; i < prices; i++) {
			if (prices[i] > maxPrice) {
				maxPrice = prices[i];
			}
			if (prices[i] < minPrice)
		}

};

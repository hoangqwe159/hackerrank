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
// const maxProfit = function(prices) {
//     let maxPrice = - Infinity;
// 		let minPrice = Infinity;
// 		for (let i = 0; i < prices; i++) {
// 			if (prices[i] > maxPrice) {
// 				maxPrice = prices[i];
// 			}
// 			if (prices[i] < minPrice)
// 		}

// };

const continuousCompoundInterest = (fv, percent, duration) => {
	let total = 0;
	for (let i = 0; i < duration; i++) {
		total = (total + fv) * (1 + percent);
	}
	return total;
}

const compoundInterest = (fv, percent, duration) => {
	return fv * Math.pow((1 + percent), duration);
}
console.log(compoundInterest(10, 0.15, 20));

let investPerYear = 360; // million VND
let profitPerYear = 0.1; // 10%
let durationYear = 8; // 8 years

let investPerMonth = investPerYear / 12;
let profitPerMonth = profitPerYear /12;
let durationMonth =durationYear * 12;

// invest monthly
console.log(continuousCompoundInterest(investPerMonth, profitPerMonth,durationMonth));

// invest annually
console.log(continuousCompoundInterest(investPerYear, profitPerYear, durationYear));

// saving
console.log(investPerYear * durationYear);


// Invest 20 years, 6% per year
investPerYear = 360;
profitPerYear = 0.06;
durationYear = 20;

investPerMonth = investPerYear / 12;
profitPerMonth = profitPerYear /12;
durationMonth =durationYear * 12;

// invest monthly
console.log(continuousCompoundInterest(investPerMonth, profitPerMonth,durationMonth));

// invest annually
console.log(continuousCompoundInterest(investPerYear, profitPerYear, durationYear));

// saving
console.log(investPerYear * durationYear);



var uniqueOccurrences = function(arr) {
  const hash = {};
  for (const number of arr) {
    hash[number] = hash[number] ? hash[number] + 1 : 1;
  }

  const hashOccurrence = {};

  for (const number of Object.values(hash)) {
    hashOccurrence[number] = hashOccurrence[number] ? hashOccurrence[number] + 1 : 1;
    if (hashOccurrence[number] > 1) return false;
  }

  return true;
};

const array1 = [1, 0]

console.log(uniqueOccurrences(array1))
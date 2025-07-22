// Time Complexity: O(n^2)
// Space Complexity: O(1)
function twoSumBruteForce(nums: number[], target: number): number[] {
  let twoSumIndex: number[] = [];

  outerLoop: for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        twoSumIndex.push(i, j);
        break outerLoop;
      }
    }
  }

  return twoSumIndex;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum(nums: number[], target: number): number[] {
  const cachedNumbers: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIndex = cachedNumbers.get(complement);

    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }
    cachedNumbers.set(nums[i], i);
  }

  return [];
}

// --- Test Cases ---

console.log("====== Brute Force Solution ======");
console.log(
  `Input: [2, 7, 11, 15], Target: 9  -> Output: [${twoSumBruteForce([2, 7, 11, 15], 9).join(", ")}]`,
);
console.log(
  `Input: [3, 2, 4], Target: 6       -> Output: [${twoSumBruteForce([3, 2, 4], 6).join(", ")}]`,
);
console.log(
  `Input: [3, 3], Target: 6          -> Output: [${twoSumBruteForce([3, 3], 6).join(", ")}]`,
);
console.log(
  `Input: [5, 5, 5], Target: 11     -> Output: [${twoSumBruteForce([5, 5, 5], 11).join(", ")}]`,
);

console.log("\n====== Optimal (Map) Solution ======");
console.log(
  `Input: [2, 7, 11, 15], Target: 9  -> Output: [${twoSum([2, 7, 11, 15], 9).join(", ")}]`,
);
console.log(
  `Input: [3, 2, 4], Target: 6       -> Output: [${twoSum([3, 2, 4], 6).join(", ")}]`,
);
console.log(
  `Input: [3, 3], Target: 6          -> Output: [${twoSum([3, 3], 6).join(", ")}]`,
);
console.log(
  `Input: [5, 5, 5], Target: 11     -> Output: [${twoSum([5, 5, 5], 11).join(", ")}]`,
);

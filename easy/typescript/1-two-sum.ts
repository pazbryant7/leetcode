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

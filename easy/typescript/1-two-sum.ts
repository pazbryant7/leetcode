// HACK: One pass / Hash map
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

function twoSum1(nums: number[], target: number): number[] {
  const seen: { [num: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (seen[x] != null) {
      return [i, seen[x]];
    }
    seen[nums[i]] = i;
  }

  return [];
}

function twoSum2(nums: number[], target: number): number[] {
  let twoSumIndex: number[] = [];

  // HACK: Stop outer loop from inner loop
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

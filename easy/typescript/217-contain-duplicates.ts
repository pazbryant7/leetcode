// HACK: One pass / Hash map
function containsDuplicateWithSet(nums: number[]): boolean {
  const seen = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }

  return false;
}

function containsDuplicate(nums: number[]): boolean {
  const seen: { [index: string]: boolean } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen[num]) {
      return true;
    }
    seen[nums[i]] = true;
  }
  return false;
}

function containsDuplicateBruteForce(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length - i; j++) {
      if (nums[i] === nums[j + i]) {
        return true;
      }
    }
  }
  return false;
}

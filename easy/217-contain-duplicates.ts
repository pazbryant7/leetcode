// NOTE: Topics are Array, Hash Table and Sorting

function containsDuplicate(nums: number[]): boolean {
  const seen: { [index: number]: boolean } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen[num]) {
      return true;
    }
    seen[nums[i]] = true;
  }
  return false;
}

// NOTE: Time complexity is = O(n)
// NOTE: Space complexity is = O(n)
console.log(containsDuplicate([1, 2, 3, 2])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([0, 0])); // true (handles zero correctly)
console.log(containsDuplicate([-1, 0, 1, 0])); // true (handles zero correctly)

console.log("-------");

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

// NOTE: Time complexity is = O(n2)
// NOTE: Space complexity is = 0(1)
console.log(containsDuplicateBruteForce([1, 2, 3, 2])); // true
console.log(containsDuplicateBruteForce([1, 2, 3, 4])); // false
console.log(containsDuplicateBruteForce([0, 0])); // true (handles zero correctly)
console.log(containsDuplicateBruteForce([-1, 0, 1, 0])); // true (handles zero correctly)

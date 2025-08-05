// NOTE: This is better, because you do not leet JavaScript to create
// dinamic arrays (more overhead), you instead, pre-allocate memory with
// a static one `Array(2 * len)`
function getConcatenation(nums: number[]): number[] {
  const len = nums.length;
  const ans = new Array(2 * len);

  for (let i = 0; i < len; i++) {
    ans[i] = nums[i];
    ans[i + len] = nums[i];
  }

  return ans;
}

// HACK: Most eficient because javascript runtime
function getConcatenation1(nums: number[]): number[] {
  return [...nums, ...nums];
}

function getConcatenation3(nums: number[]): number[] {
  const ansi: Array<number> = [];
  for (let i = 0; i < nums.length; i++) {
    ansi[i] = nums[i];
    ansi[nums.length + i] = nums[i];
  }
  return ansi;
}

function getConcatenation4(nums: number[]): number[] {
  let maxNumberIterations = nums.length;
  for (let i = 0; i < maxNumberIterations; i++) {
    nums[nums.length] = nums[i];
  }
  return nums;
}

getConcatenation4([1, 2, 3, 4, 5]);

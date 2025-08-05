// HACK: Two pointers
function removeDuplicates(nums: Array<number>): number {
  let l: number = 1;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[r - 1]) {
      nums[l++] = nums[r];
    }
  }
  return l;
}

// HACK: Two pointers with while loop
function removeDuplicates1(nums: Array<number>): number {
  let l = 1,
    r = 1;

  while (r < nums.length) {
    if (nums[r] !== nums[r - 1]) {
      nums[l++] = nums[r];
    }
    r++;
  }

  return nums.length;
}

// HACK: Two pointers II
function removeDuplicates2(nums: Array<number>): number {
  let n = nums.length,
    l = 0,
    r = 0;
  while (r < n) {
    nums[l] = nums[r];
    while (r < n && nums[r] === nums[l]) {
      r++;
    }
    l++;
  }
  return l;
}

function removeDuplicates3(nums: Array<number>): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

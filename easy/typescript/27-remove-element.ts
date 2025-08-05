// HACK: Two pointers
function removeElement(nums: number[], val: number): number {
  let l: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[l] = nums[i];
      l++;
    }
  }

  return l;
}

// HACK: Two pointers with while loop
function removeElement1(nums: number[], val: number): number {
  let l: number = 0;

  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[l] = nums[i];
      l++;
    }
    i++;
  }

  return l;
}

function removeElement2(nums: number[], val: number): number {
  const temp: number[] = [];

  for (let k = 0; k < nums.length; k++) {
    const num = nums[k];
    if (num !== val) {
      temp.push(num);
    }
  }

  for (let k = 0; k < temp.length; k++) {
    nums[k] = temp[k];
  }

  return temp.length;
}

function removeElemen3(nums: number[], val: number): number {
  let validLength = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = Infinity;
      validLength--;
    }
  }
  nums.sort();
  return validLength;
}

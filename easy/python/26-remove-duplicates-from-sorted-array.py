class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        if not nums:
            return 0

        left_idx = 0

        for right_idx in range(1, len(nums)):
            if nums[right_idx] != nums[left_idx]:
                left_idx += 1
                nums[left_idx] = nums[right_idx]

        return left_idx + 1

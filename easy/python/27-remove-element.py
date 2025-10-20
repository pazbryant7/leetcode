class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        left_pointer = 0

        for num in nums:
            if num != val:
                nums[left_pointer] = num
                left_pointer += 1

        return left_pointer

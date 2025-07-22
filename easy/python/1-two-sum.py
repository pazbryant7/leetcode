class Solution:
    def twoSum(nums: list[int], target: int) -> list[int] | None:
        seen: dict[int, int] = {}

        for i in range(len(nums)):
            x = target - nums[i]
            if seen.get(x) is not None:
                return [seen.get(x), i]
            seen[nums[i]] = i
        return []

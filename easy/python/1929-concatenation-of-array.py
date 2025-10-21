class Solution:
    def getConcatenation(self, nums: list[int]) -> list[int]:
        concadenation: list[int] = []

        for i in range(len(nums)):
            concadenation.append(nums[i])

        for i in range(len(nums)):
            concadenation.append(nums[i])

        return concadenation

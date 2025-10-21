class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        strs_count: dict[str, int] = {}

        for char in s:
            strs_count[char] = strs_count.get(char, 0) + 1

        for char in t:
            if char in strs_count:
                strs_count[char] = strs_count.get(char) - 1
            else:
                return False

        return True

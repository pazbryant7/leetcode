class Solution:
    def firstUniqChar(self, s: str) -> int:
        unique: dict[str, int] = {}

        for char in s:
            unique[char] = unique.get(char, 0) + 1

        for i in range(len(s)):
            if unique.get(s[i]) == 1:
                return i
        return -1

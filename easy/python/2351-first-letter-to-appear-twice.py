class Solution:
    def repeatedCharacter(self, s: str) -> str:
        seen: dict[str, bool] = {}

        for char in s:
            if seen.get(char):
                return char
            else:
                seen[char] = True

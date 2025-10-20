class Solution:
    def isValid(s: str) -> bool:
        PARENS_MAP: dict[str, str] = {
            ")": "(",
            "}": "{",
            "]": "[",
        }

        stack: list[str] = []

        for char in s:
            if char in PARENS_MAP:
                if not stack or stack.pop() != PARENS_MAP[char]:
                    return False
            else:
                stack.append(char)

        return not stack

class MinStack:
    def __init__(self):
        self.min: list[int] = []
        self.stack: list[int] = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.getMin() if self.min else val)
        self.min.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.min.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min[-1]

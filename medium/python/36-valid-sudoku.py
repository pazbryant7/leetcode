class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        rows: dict[int, set[str]] = {}
        cols: dict[int, set[str]] = {}
        squares: dict[tuple, set[str]] = {}

        for r in range(9):
            for c in range(9):
                val = board[r][c]

                if val == ".":
                    continue

                if r not in rows:
                    rows[r] = set()
                if c not in cols:
                    cols[c] = set()

                square_key = (r // 3, c // 3)
                if square_key not in squares:
                    squares[square_key] = set()

                if val in rows[r] or val in cols[c] or val in squares[square_key]:
                    return False

                rows[r].add(val)
                cols[c].add(val)
                squares[square_key].add(val)

        return True

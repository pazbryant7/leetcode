function isValidSudoku(board: string[][]): boolean {
  const cols = new Map<number, Set<string>>();
  const rows = new Map<number, Set<string>>();
  const square = new Map<string, Set<string>>();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        continue;
      }

      const squareC = Math.floor(c / 3);
      const squareR = Math.floor(r / 3);
      const coordinates = squareR + "-" + squareC;

      if (!square.has(coordinates)) {
        square.set(coordinates, new Set<string>());
      }

      if (!cols.has(c)) {
        cols.set(c, new Set<string>());
      }

      if (!rows.has(r)) {
        rows.set(r, new Set<string>());
      }

      if (
        cols.get(c)?.has(board[r][c]) ||
        rows.get(r)?.has(board[r][c]) ||
        square.get(coordinates)?.has(board[r][c])
      ) {
        return false;
      }

      rows.get(r)?.add(board[r][c]);
      cols.get(c)?.add(board[r][c]);
      square.get(coordinates)?.add(board[r][c]);
    }
  }

  return true;
}

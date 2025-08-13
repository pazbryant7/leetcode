function repeatedCharacter(s: string): string {
  const seen: { [idx: string]: boolean } = {};

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) {
      return s[i];
    }
    seen[s[i]] = true;
  }

  return "";
}

function repeatedCharacter1(s: string): string {
  const seen: Set<string> = new Set();

  for (let char of s) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }

  return "";
}

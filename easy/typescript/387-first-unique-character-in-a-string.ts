function firstUniqChar(s: string): number {
  const charCounts: Map<string, number> = new Map();

  for (const char of s) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCounts.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

function firstUniqChar1(s: string): number {
  const charCounts: { [key: string]: number } = {};

  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCounts[char] === 1) {
      return i;
    }
  }

  return -1;
}

function firstUniqChar2(s: string): number {
  const unique: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (unique.has(char)) {
      unique.set(char, -1);
    } else {
      unique.set(char, i);
    }
  }

  for (const index of unique.values()) {
    if (index !== -1) {
      return index;
    }
  }

  return -1;
}

function isAnagramBruteForce(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const seen: { [char: string]: string } = {};

  for (let i = 0; i < s.length; i++) {
    let isAnagram = false;
    for (let j = 0; j < t.length; j++) {
      if (seen[j]) {
        continue;
      }
      if (s[i] === t[j]) {
        seen[j] = t[j];
        isAnagram = true;
        break;
      }
    }
    if (!isAnagram) {
      return false;
    }
  }

  return true;
}

function isAnagramWithMap(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charCounts = new Map<string, number>();

  for (const char of s) {
    const count = (charCounts.get(char) || 0) + 1;
    charCounts.set(char, count);
  }

  for (const char of t) {
    const count = charCounts.get(char);
    if (!count) {
      return false;
    }

    charCounts.set(char, count - 1);
  }

  return true;
}

function isAnagram(s: string, t: string): boolean {
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
}

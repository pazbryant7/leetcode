// HACK: One pass / Hash map
function isAnagram(s: string, t: string): boolean {
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

function isAnagram1(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sc: { [char: string]: number } = {};

  for (const char of s) {
    sc[char] = sc[char] + 1 || 1;
  }

  for (const char of t) {
    if (sc[char]) {
      sc[char]--;
    } else {
      return false;
    }
  }

  return true;
}

function isAnagram2(s: string, t: string): boolean {
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
}

function isAnagram3(s: string, t: string): boolean {
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

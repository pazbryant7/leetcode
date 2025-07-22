// NOTE: Topics are Array, Hash Table and Sorting
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

console.log("--- Brute Force ---");
console.log(isAnagramBruteForce("anagram", "nagaram")); // true
console.log(isAnagramBruteForce("rat", "car")); // false
console.log(isAnagramBruteForce("listen", "silent")); // true
console.log(isAnagramBruteForce("apple", "apply")); // false

console.log("--- With Map ---");
console.log(isAnagramWithMap("anagram", "nagaram")); // true
console.log(isAnagramWithMap("rat", "car")); // false
console.log(isAnagramWithMap("listen", "silent")); // true
console.log(isAnagramWithMap("apple", "apply")); // false

console.log("--- With Sort ---");
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("apple", "apply")); // false

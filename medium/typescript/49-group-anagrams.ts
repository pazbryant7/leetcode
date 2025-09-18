function groupAnagrams(strs: string[]): string[][] {
  const anagramGroups = new Map();

  for (const str of strs) {
    const count = new Array(26).fill(0);

    for (const char of str) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      count[index]++;
    }

    const key = count.join("#");

    if (!anagramGroups.has(key)) {
      anagramGroups.set(key, []);
    }
    anagramGroups.get(key).push(str);
  }

  return Array.from(anagramGroups.values());
}

function groupAnagrams1(strs: string[]): string[][] {
  const anagramGroups = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (anagramGroups.has(sortedStr)) {
      anagramGroups.get(sortedStr)?.push(str);
    } else {
      anagramGroups.set(sortedStr, [str]);
    }
  }

  return Array.from(anagramGroups.values());
}

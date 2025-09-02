function groupAnagrams(strs: string[]): string[][] {
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

function groupAnagrams1(strs: string[]): string[][] {
  const groupAnagrams: { [key: string]: string[] } = {};

  for (const str of strs) {
    const sortedArray = str.split("").sort().join("");

    if (groupAnagrams[sortedArray]) {
      groupAnagrams[sortedArray].push(str);
    } else {
      groupAnagrams[sortedArray] = [str];
    }
  }

  return Object.values(groupAnagrams);
}

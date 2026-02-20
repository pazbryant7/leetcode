function longestCommonPrefix(strs: string[]): string {
  let r = "";
  const sortedStrs = strs.sort();

  const first = sortedStrs[0];
  const last = sortedStrs[sortedStrs.length - 1];

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) break;
    r += first[i];
  }

  return r;
}

function longestCommonPrefix1(strs: string[]): string {
  const baseWord = strs[0];
  const maxPrefixList: number[] = [];

  for (let i = 1; i < strs.length; i++) {
    let maxPrefix = 0;

    for (let j = 0; j < strs[i].length; j++) {
      if (baseWord[j] !== strs[i][j]) {
        break;
      }

      maxPrefix++;
    }
    maxPrefixList.push(maxPrefix);
  }

  return baseWord.substring(0, Math.min(...maxPrefixList));
}

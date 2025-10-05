class Solution {
  encode(strs: string[]) {
    let res = "";

    for (let i = 0; i < strs.length; i++) {
      res += `${strs[i].length}#${strs[i]}`;
    }

    return res;
  }

  decode(str: string) {
    let decoded: Array<string> = [],
      i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== "#") {
        j++;
      }

      let wordLength = parseInt(str.substring(i, j));
      let word = str.substring(j + 1, j + 1 + wordLength);

      decoded.push(word);

      i = j + 1 + wordLength;
    }

    return decoded;
  }
}

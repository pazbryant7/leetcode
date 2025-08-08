function isValid(s: string): boolean {
  const r: Object = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    if (r[s[i]]) {
      if (r[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}

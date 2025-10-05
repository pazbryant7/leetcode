function encode(strs: string[]) {
  if (strs.length === 0) return "";

  let sizes: number[] = [];
  let res = "";

  for (let s of strs) {
    sizes.push(s.length);
  }

  for (let sz of sizes) {
    res += sz + ",";
  }

  res += "#";

  for (let s of strs) {
    res += s;
  }

  return res;
}

function decode(str: string) {
  if (str.length === 0) return [];

  let sizes: number[] = [];
  let res: string[] = [];

  let i = 0;

  while (str[i] !== "#") {
    let cur = "";
    while (str[i] !== ",") {
      cur += str[i];
      i++;
    }

    sizes.push(parseInt(cur));

    i++;
  }

  i++;

  for (let sz of sizes) {
    res.push(str.substring(i, sz));
    i += sz;
  }

  return res;
}

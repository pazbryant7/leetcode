class HashTable {
  data: [string, number][][];

  constructor(size: number) {
    this.data = new Array(size);
  }

  _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 1) % this.data.length;
    }
    return hash;
  }

  set(key: string, value: number): void {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [[key, value]];
    } else {
      for (let pair of this.data[hash]) {
        if (key === pair[0]) {
          pair[1] = value;
          return;
        }
      }
      this.data[hash].push([key, value]);
    }
  }

  get(key: string): number | undefined {
    const hash = this._hash(key);
    const bucket = this.data[hash];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys(): string[] {
    const storedKeys: string[] = [];
    for (let bucket of this.data) {
      if (bucket) {
        for (let pair of bucket) {
          storedKeys.push(pair[0]);
        }
      }
    }

    return storedKeys;
  }
}

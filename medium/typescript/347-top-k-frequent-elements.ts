function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (const [nunmber, frequency] of freqMap.entries()) {
    buckets[frequency].push(nunmber);
  }

  const topKFreqNum: number[] = [];

  for (let i = buckets.length - 1; i >= 0; i--) {
    for (const n of buckets[i]) {
      topKFreqNum.push(n);
      if (topKFreqNum.length === k) {
        return topKFreqNum;
      }
    }
  }

  return topKFreqNum;
}

function topKFrequent1(nums: number[], k: number): number[] {
  const countNumbers = new Map<number, number>();

  for (const num of nums) {
    countNumbers.set(num, (countNumbers.get(num) || 0) + 1);
  }

  const result = Array.from(countNumbers.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);

  return result;
}

class MinStack {
  private stack: number[] = [];
  private min: number[] = [];

  push(val: number): void {
    const min = this.min.length === 0 ? val : Math.min(val, this.getMin());

    this.stack.push(val);
    this.min.push(min);
  }

  pop(): void {
    this.stack.pop();
    this.min.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }
}

const stack = new MinStack();

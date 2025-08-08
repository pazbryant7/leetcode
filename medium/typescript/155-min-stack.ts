class MinStack {
  private stack: number[] = [];
  private min: number[] = [];

  push(val: number): void {
    this.stack.push(val);

    const min = this.min.length === 0 ? val : Math.min(val, this.getMin());

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

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.getMin());
stack.pop();
console.log(stack.top());
console.log(stack.getMin());

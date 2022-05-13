type sum = (a: number, b: number) => number;

const myfun: sum = (a, b) => a + b;

function fun1(a: number, b: number): void {}

const fun2 = (a: number, b: number): void => {};

interface obj {
  (a: number, b: number): number;
}

const f3: obj = (x, y) => x + y;

f3(1, 2);
export {};

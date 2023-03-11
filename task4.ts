function calcfactorial(num: number): number {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(calcfactorial(5));
console.log(calcfactorial(10));
console.log(calcfactorial(0));

export function fibonacci(n) {
  return n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

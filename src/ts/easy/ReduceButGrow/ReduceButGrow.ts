export function grow(arr: number[]): number {
  
  return arr.reduce((product, num) => product * num, 1);
  }
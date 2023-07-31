export function Fibonacci(numb:number) : number {
    let sum  : number = 0;
    let a : number= 0;
    let b : number = 1;
  
    while (b  < numb) {
      if (b % 2 === 0) {
        sum += b;
      }
  
      const next : number= a + b;
      a = b;
      b = next;
    }
  
    return sum;
}
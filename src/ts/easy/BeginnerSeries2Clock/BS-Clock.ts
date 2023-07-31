export function past(h: number, m: number, s: number): number {
      //hacemos las operaciones matematicas necesarias
      const millisecondsFromHours : number = h * 60 * 60 * 1000;
      const millisecondsFromMinutes : number = m * 60 * 1000;
      const millisecondsFromSeconds : number = s * 1000;
      return millisecondsFromHours + millisecondsFromMinutes + millisecondsFromSeconds ;
  }
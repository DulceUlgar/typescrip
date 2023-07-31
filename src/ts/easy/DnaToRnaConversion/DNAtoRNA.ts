export function DNAtoRNA(dna: string): string {
    //cambiamos las t por u
    return dna.replace(/T/g, 'U');
  }
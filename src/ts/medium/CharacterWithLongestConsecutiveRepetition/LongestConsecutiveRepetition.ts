export function longestRepetition (text: string): [string, number] {
  if (text.length === 0) {
    return ["", 0];
  }

  let currentChar : string = text[0];
  let currentCount :number = 1;
  let maxChar : string  = text[0];
  let maxCount :number = 1;

  for (let i :number = 1; i < text.length; i++) {
    if (text[i] === currentChar) {
      currentCount++;
      if (currentCount > maxCount) {
        maxChar = currentChar;
        maxCount = currentCount;
      }
    } else {
      currentChar = text[i];
      currentCount = 1;
    }
  }

  return [maxChar, maxCount];
}
  
  
export function expressionsMatter(a: number, b: number, c: number): number {
        //probamos las diferentes combinaciones
        const option1 :number = a + b + c;
        const option2 :number = a * b * c;
        const option3 :number = a * (b + c);
        const option4 :number = (a + b) * c;
        return Math.max(option1, option2, option3, option4);
   
 }
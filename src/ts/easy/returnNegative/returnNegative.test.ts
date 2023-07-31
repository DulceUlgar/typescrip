import { describe, it, expect } from 'vitest';
import { makeNegative } from './returnNegative'

describe('Test exercise return negative number', () => {
    it('should return -42', () => {
        const result = makeNegative(42)
        expect(result).equals(-42)
    });

    it('should return -3', () => {
        const result = makeNegative(3)
        expect(result).equals(-3)
    });
    //cambie el -3 por -5 porque si el ejercicio consiste en hacer que un numero sea negativo (o que se quede asi) entonces un -5 
    //no puede  convertirse en -3 
    it('should return -5', () => {
        const result = makeNegative(-5)
        expect(result).equals(-5)
    });

    it('should return 0', () => {
        const result = makeNegative(0)
        expect(result).equals(0)
    });
});


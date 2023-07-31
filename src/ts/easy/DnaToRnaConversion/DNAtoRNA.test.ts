import { assert, describe, it } from 'vitest'
import { DNAtoRNA } from "./DNAtoRNA";

describe('Tests exercise DNA to RNA Conversion', () => {
    it("Should return a string", function() {
        assert.equal(DNAtoRNA("TTTT"), "UUUU");
        assert.equal(DNAtoRNA("GCAT"), "GCAU");
        assert.equal(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
      });
});
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testFunctions";

describe.skip("check if all functions created", () => {
  let list = [capitalize, reverseString, caesarCipher, analyzeArray];
  for (let i = 0; i < list.length; i++) {
    it(`${list[i].name} ${typeof list[i]} defined`, () => {
      expect(list[i]).toBeDefined();
    });
  }

  it("calculator object defined", () => {
    expect(calculator).toBeDefined();
  });
});

describe.skip("tests for capitalize function", () => {
  it(`takes 'a' returns 'A'`, () => {
    expect(capitalize("a")).toBe("A");
  });

  it(`takes 'rust' returns 'Rust'`, () => {
    expect(capitalize("rust")).toBe("Rust");
  });

  it(`takes '' returns ''`, () => {
    expect(capitalize("")).toBe("");
  });

  it(`takes nothing returns ''`, () => {
    expect(capitalize()).toBe("");
  });

  it(`takes 'Thing' returns 'Thing'`, () => {
    expect(capitalize("Thing")).toBe("Thing");
  });
});

describe.skip("tests for reverseString function", () => {
  it(`takes 'one' returns 'eno'`, () => {
    expect(reverseString("one")).toBe("eno");
  });

  it(`takes 'a' returns 'a'`, () => {
    expect(reverseString("a")).toBe("a");
  });

  it(`takes '' returns ''`, () => {
    expect(reverseString('')).toBe('');
  });

  it(`takes nothing returns ''`, () => {
    expect(reverseString()).toBe('');
  });
});

describe('tests for calculator object', () =>{
    it(`adds 400 + 20`, () => {
        expect(calculator.add(400,20)).toBe(420);
    });

    it(`adds negative numbers `, () => {
        expect(calculator.add(-400,-20)).toBe(-420);
    });

    it(`adds floats`, () => {
        expect(calculator.add(.1,.2)).toBeCloseTo(.3);
    });

    it(`subtracts 440 & 20`, () => {
        expect(calculator.subtract(440,20)).toBe(420);
    });

    it(`subtracts negative numbers`, () => {
        expect(calculator.subtract(-440,-20)).toBe(-420);
    });

    it(`subtracts floats`, () => {
        expect(calculator.subtract(-.1,-.2)).toBeCloseTo(.1);
    });

    it(`divides`, () => {
        expect(calculator.divide(2,2)).toBe(1);
    });

    it(`multiplies`, () => {
        expect(calculator.multiply(4,4)).toBe(16);
    });

});

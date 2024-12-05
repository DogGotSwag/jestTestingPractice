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

describe("tests for reverseString function", () => {
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

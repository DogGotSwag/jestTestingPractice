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

describe("tests for capitalize function", () => {
  it(`takes 'a' returns 'A'`, () => {
    expect(capitalize('a')).toBe('A');
  });
  
  it(`takes 'rust' returns 'Rust'`, () => {
    expect(capitalize('rust')).toBe('Rust');
  });

});

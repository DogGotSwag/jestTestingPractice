import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testFunctions";

describe("check if all functions created", () => {
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
    expect(reverseString("")).toBe("");
  });

  it(`takes nothing returns ''`, () => {
    expect(reverseString()).toBe("");
  });
});

describe("tests for calculator object", () => {
  it(`adds 400 + 20`, () => {
    expect(calculator.add(400, 20)).toBe(420);
  });

  it(`adds negative numbers `, () => {
    expect(calculator.add(-400, -20)).toBe(-420);
  });

  it(`adds floats`, () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it(`subtracts 440 & 20`, () => {
    expect(calculator.subtract(440, 20)).toBe(420);
  });

  it(`subtracts negative numbers`, () => {
    expect(calculator.subtract(-440, -20)).toBe(-420);
  });

  it(`subtracts floats`, () => {
    expect(calculator.subtract(-0.1, -0.2)).toBeCloseTo(0.1);
  });

  it(`divides`, () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });

  it(`multiplies`, () => {
    expect(calculator.multiply(4, 4)).toBe(16);
  });
});

describe("tests for caesarCipher", () => {
  it("shifts one letter by 0", () => {
    expect(caesarCipher("a", 0)).toMatch("a");
  });

  it("shifts one letter by 1", () => {
    expect(caesarCipher("a", 1)).toMatch("b");
  });

  it("shifts y by 1", () => {
    expect(caesarCipher("y", 1)).toMatch("z");
  });
  it("shifts q by 6", () => {
    expect(caesarCipher("q", 6)).toMatch("w");
  });
  it("shifts a letter by 100", () => {
    expect(caesarCipher("a", 100)).toMatch("w");
  });

  it("shifts f letter by 100", () => {
    expect(caesarCipher("f", 100)).toMatch("b");
  });

  it("shifts g letter by 123", () => {
    expect(caesarCipher("g", 123)).toMatch("z");
  });

  it("make sure it wraps", () => {
    expect(caesarCipher("y", 777)).toMatch("v");
  });

  it("make 'a' wrap negative", () => {
    expect(caesarCipher("a", -23)).toMatch("d");
  });

  it("make'a' wrap negative", () => {
    expect(caesarCipher("a", -18)).toMatch("i");
  });
  it("make sure it e negative", () => {
    expect(caesarCipher("e", -23)).toMatch("h");
  });
  it("make sure it e negative", () => {
    expect(caesarCipher("t", -13)).toMatch("g");
  });
  it("make sure it 'a' with large negative key", () => {
    expect(caesarCipher("a", -47)).toMatch("f");
  });

  it("make sure it wraps negative", () => {
    expect(caesarCipher("y", -34)).toMatch("q");
  });

  it("works for multiple letters", () => {
    expect(caesarCipher("xyz", 3)).toMatch("abc");
  });

  it("test for case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
  });

  it("test if all non-alphabetical chars remain the same", () => {
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
  });
});

describe("tests for analyzeArray", () => {
  it("test for empty array, and no input", () => {
    let array = [];
    expect(analyzeArray()).toStrictEqual({});
    expect(analyzeArray(array)).toStrictEqual({});
  });

  it("find smallest", () => {
    let array = [1, 8, 21, 4];
    expect(analyzeArray(array)["min"]).toBe(1);
  });

  it("find smallest", () => {
    let array = [6, 31, 5, 9];
    expect(analyzeArray(array)["min"]).toBe(5);
  });

  it("find smallest", () => {
    let array = [1, 8, 3, 4, 2, 6];
    expect(analyzeArray(array)["min"]).toBe(1);
  });

  it("find max", () => {
    let array = [40, 38, 72, 83];
    expect(analyzeArray(array)["max"]).toBe(83);
  });

  it("find max", () => {
    let array = [99, 1000, 3, 67];
    expect(analyzeArray(array)["max"]).toBe(1000);
  });

  it("find length", () => {
    let array = [99, 1000, 3, 67];
    expect(analyzeArray(array)["length"]).toBe(4);
  });

  it("find length", () => {
    let array = [1, 2, 4, 5, 6, 7, 8, 9];
    expect(analyzeArray(array)["length"]).toBe(8);
  });

  it("find length random number 200-1000", () => {
    let randomNumber = Math.floor(Math.random() * (1000 - 200) + 200);
    let arr = [];
    for (let i = 0; i < randomNumber; i++) {
      arr.push(i);
    }
    expect(analyzeArray(arr)["length"]).toBe(arr.length);
  });

  it("find the average", () => {
    let array = [1, 1, 1, 1, 1];
    expect(analyzeArray(array)['average']).toBe(1);
  });

  it("find the average", () => {
    let array = [123, 658];
    expect(analyzeArray(array)['average']).toBeCloseTo(390.5);
  });

  it("find the average", () => {
    let array = [363, 33, 73, 21, 63, 99];
    expect(analyzeArray(array)['average']).toBeCloseTo(108.67);
  });
});

function capitalize(string = "") {
  if (string == "") return "";
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function reverseString(string = "") {
  return string.split("").reverse().join("");
}

let calculator = {
  add: (num, numTwo) => num + numTwo,
  subtract: (num, numTwo) => num - numTwo,
  multiply: (num, numTwo) => num * numTwo,
  divide: (num, numTwo) => num / numTwo,
};
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function caesarCipher(string, key) {
  let word = '';
  for (let i = 0; i < string.length; i++) {
    let currentIndex = alphabet.indexOf(string[i]);
    let largeNewIndex = currentIndex + key;
    let finalNewIndex;
    if (largeNewIndex > 25 || largeNewIndex < 0) {
      finalNewIndex = currentIndex + (key % 26);
      if (finalNewIndex > 25) finalNewIndex -= 26;
      if (finalNewIndex < 0) finalNewIndex += 26;
      word += alphabet[finalNewIndex];
    } else word += alphabet[largeNewIndex];
  }
  return word;
}

// console.log(caesarCipher("a", -46));

function analyzeArray() {}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

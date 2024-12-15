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

function isUpperCase(char) {
  let upper = char.toUpperCase();
  return upper.localeCompare(char) === 0 ? true : false;
}
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
  let word = "";
  for (let i = 0; i < string.length; i++) {
    let isUpper = isUpperCase(string[i]);
    let currentIndex = alphabet.indexOf(string[i].toLowerCase());
    let newIndex = currentIndex + (key % 26);
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex += 26;
    word += isUpper
      ? alphabet[newIndex].toUpperCase()
      : alphabet[newIndex];
  }
  return word;
}

console.log(caesarCipher("HeLLo", 3));

function analyzeArray() {}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

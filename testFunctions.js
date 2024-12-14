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
  let currentIndex = alphabet.indexOf(string);

  if (currentIndex + key > 25) {
    currentIndex = currentIndex + (key % 26);
    if (currentIndex > 25) currentIndex -= 26;
  } else if (currentIndex + key < 0) {
    if (currentIndex + key < -25) key = (currentIndex + key) % 26;
    return alphabet[currentIndex + (26 + key)];
  } else {
    currentIndex += key;
  }
  return alphabet[currentIndex];
}

console.log(caesarCipher("a", -46));

function analyzeArray() {}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

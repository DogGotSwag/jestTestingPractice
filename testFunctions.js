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
    if (currentIndex === -1) {
      word += string[i];
      continue;
    }
    let newIndex = currentIndex + (key % 26);
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex += 26;
    word += isUpper ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
  }
  return word;
}


function analyzeArray( arr = []) {
  if(arr.length === 0) return {};
  
  let obj = {
    min: arr[0],
    max: arr[0]
  };

  for( let i = 1; i < arr.length; i++){
    if(arr[i] < obj.min) obj.min = arr[i];
    if(arr[i] > obj.max) obj.max = arr[i];
  }

  return obj;
}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

function capitalize(string = "") {
  if (string == "") return "";
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function reverseString(string = "") {
    return string.split('').reverse().join('');
}

let calculator = {
  add: (num, numTwo) => num + numTwo, 
  subtract: (num, numTwo) => num - numTwo, 
  multiply: (num, numTwo) => num * numTwo,
  divide: (num, numTwo) => num/numTwo,
};

function caesarCipher() {}

function analyzeArray() {}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

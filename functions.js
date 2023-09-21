const capitalize = (string) => {
  const firstLetter = string.charAt(0).toUpperCase();
  const remainingLetters = string.slice(1, string.length);
  const capitalized = firstLetter + remainingLetters;
  return capitalized;
};

const reverseString = (string) => {
  const reversed = string.split("").reverse().join("");
  return reversed;
};

const calculator = () => {
  const add = (num1, num2) => num1 + num2;

  const subtract = (num1, num2) => num1 - num2;

  const divide = (num1, num2) => num1 / num2;

  const multiply = (num1, num2) => num1 * num2;

  return { add, subtract, divide, multiply };
};

const caesarCipher = (inputString, shiftFactor) => {
  let encryptedString = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (/[a-z]/.test(char)) {
      encryptedString += shiftCharacter(char, "a", shiftFactor);
    } else if (/[A-Z]/.test(char)) {
      encryptedString += shiftCharacter(char, "A", shiftFactor);
    } else {
      encryptedString += char;
    }
  }

  function shiftCharacter(char, base, shiftFactor) {
    const alphabetSize = 26;
    const charCode = char.charCodeAt(0);
    const baseCode = base.charCodeAt(0);
    const shiftedValue = (charCode - baseCode + shiftFactor + alphabetSize) % alphabetSize;
    const shiftedCharCode = shiftedValue + baseCode;
    
    return String.fromCharCode(shiftedCharCode);
  }

  return encryptedString;
};

const analyzeArray = (array) => {
  const length = array.length
  const sum = array.reduce((prev, curr)=>prev+curr,0)
  const average = sum/length

  const min = Math.min(...array)
  const max = Math.max(...array)

  return{average, min, max , length}
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

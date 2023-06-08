const btn = document.querySelector("#btn-generate");
const firstPassword = document.querySelector("#first-password");
const secondPassword = document.querySelector("#second-password");
const charSymbols = document.querySelector("#symbols");
const charNumbers = document.querySelector("#numbers");
const charLowercase = document.querySelector("#lowercase");
const charUppercase = document.querySelector("#uppercase");

// charSymbols = false;
// charNumbers = false;
// charLowercase = false;
// charUppercase = false;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["@", "#", "$", "&"];
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCaseLetters = characterCodes.map((code) =>
  String.fromCharCode(code)
);
const upperCaseLetters = characterCodes.map((code) =>
  String.fromCharCode(code).toUpperCase()
);

const generatePassword = (
  length,
  hasNumbers,
  hasSymbols,
  hasLowercase,
  hasUppercase
) => {
  const availableCharacters = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? lowerCaseLetters : []),
    ...(hasUppercase ? upperCaseLetters : []),
  ];
  let password = "";
  if (availableCharacters.length === 0) return "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
};


  if (charNumbers.checked) {
    availableCharacters.hasNumbers = true;
  }



if (charSymbols.checked) {
    availableCharacters.hasSymbols = true;
  }

  if (charLowercase.checked) {
    availableCharacters.hasLowercase = true;
  }


  if (charUppercase.checked) {
    availableCharacters.hasUppercase = true;
  }


btn.addEventListener("click", () => {
  firstPassword.textContent = generatePassword(
    6,
    charNumbers,
    charSymbols,
    charLowercase,
    charUppercase
  );
  secondPassword.textContent = generatePassword(6, true, true, true, true);
});

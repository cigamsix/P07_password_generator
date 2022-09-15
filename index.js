const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// let headerTop = document.querySelector("#header-top");
// headerTop.textContent = `Generate a random password`;

let charHeader = document.querySelector("#char-h3");
charHeader.textContent = `Characters used: `;

let allCharPara = document.querySelector("#all-char-para");
allCharPara.textContent = `${characters}\nCharacters length: ${characters.length}`;

let passFirstBtn = document.querySelector("#pass-first-btn");
let passSecondBtn = document.querySelector("#pass-second-btn");

let passFirstPara = document.querySelector("#pass-first-para");
let passSecondPara = document.querySelector("#pass-second-para");

let generatePassBtn = document.querySelector("#generate-pass-btn");

let randomChar1 = "";
let randomChar2 = "";
let passwordFirst = "";
let passwordSecond = "";
let passwordLength = 15;

generatePasswords();
//== slider ======================================================

let ranges = document.querySelectorAll("input[type=range]");
for (var i = 0; i < ranges.length; i++) {
  ranges[i].addEventListener("change", function () {
    let showPassLength = document.querySelector("#password-length");
    passwordLength = this.value;
    showPassLength.innerHTML = this.value;
    generatePasswords();
  });
}

//== slider ======================================================

generatePassBtn.addEventListener("click", generatePasswords);

function generatePasswords() {
  passwordFirst = "";
  passwordSecond = "";

  for (let i = 0; i < passwordLength; i++) {
    randomChar1 = Math.floor(Math.random() * characters.length);
    randomChar2 = Math.floor(Math.random() * characters.length);
    passwordFirst = passwordFirst.concat(characters[randomChar1]);
    passwordSecond = passwordSecond.concat(characters[randomChar2]);
  }

  passFirstBtn.textContent = passwordFirst;
  passSecondBtn.textContent = passwordSecond;
  //passFirstPara.textContent = passwordFirst.length + " characters";
  //passSecondPara.textContent = passwordSecond.length + " characters";
}

function copyPasswordFirst() {
  // Get the password textContent from button
  let copyTextPasswordFirst = passFirstBtn.textContent;
  navigator.clipboard.writeText(copyTextPasswordFirst);
  alert("Copied password first: " + copyTextPasswordFirst);
}

function copyPasswordSecond() {
  // Get the password textContent from button
  let copyTextPasswordSecond = passSecondBtn.textContent;
  navigator.clipboard.writeText(copyTextPasswordSecond);
  alert("Copied password second: " + copyTextPasswordSecond);
}

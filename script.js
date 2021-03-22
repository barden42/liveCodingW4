//create a table with words/variables to discover
let words = [
  "kangourou",
  "table",
  "ordinateur",
  "president",
  "chateaux",
  "chocolatine",
  "dernier",
];

//set the life number
let life = 5;

//choose a random variable among the table
const index = Math.floor(Math.random() * words.length);
const secretWord = words[index];

//declare an empty table to store the letters found by the user
let findLetters = [];

//create a function wich displays the random word with "X"
//then displays the right letter if it has been found by the user

function refreshWord() {
  let displayWord = "";

  for (let i = 0; i < secretWord.length; i++) {
   
    if (findLetters.includes(secretWord[i])) {
      displayWord = displayWord + secretWord[i];
    } else {
      displayWord = displayWord + "X";
    }
  }
  document.getElementById("secretWord").innerHTML = displayWord;
}

//call the function to begin
refreshWord();

//create a variable to be able to listen the button 
const validateBtn = document.querySelector("#validate");

//create a variable to be able to display the life number dynamically
const nbDeVies = document.querySelector("#life");
nbDeVies.innerHTML = life;

//listen the button
validateBtn.addEventListener("click", function () {
    //get the letter
  const inputValue = document.querySelector("#letter").value;

  if (secretWord.includes(inputValue)) {
    findLetters.push(inputValue);
    refreshWord();
  } else {
    life--;
  }

nbDeVies.innerHTML = life;
});

//TODO
// si il y plus d'une char -> retourne une alerte
// refresh l'interface après chaque action

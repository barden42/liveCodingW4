let words = [
    "kangourou",
    "table",
    "ordinateur",
    "president",
    "chateaux",
    "chocolatine",
    "dernier"
];

let life = 5;
const index = Math.floor(Math.random() * words.length);
const secretWord = words[index];

let findLetters = [];

function refreshWord (){
    
    let displayWord = "";

for (let i = 0; i < secretWord.length; i++){

    if (findLetters.includes(secretWord[i])){
        displayWord = displayWord + secretWord[i];
    }
    else{
        displayWord = displayWord + "X";
    }
}
document.getElementById("secretWord").innerHTML = displayWord;
}

refreshWord();

const validateBtn = document.querySelector('#validate');
validateBtn.addEventListener('click', function (){
    const inputValue = document.querySelector('#letter').value;

    if (secretWord.includes(inputValue)){
        findLetters.push(inputValue);
        refreshWord();
    }else {
        life--;
    }
})




// chope la lettre entrée dans l'input
// si il y plus d'une char -> retourne une alerte

// vérification de l'existence de la lettre dans le mot 
// Si ok -> on ajoute la lettre dans findLetters -> QUI EST UN ARRAY
// Si nok -> on décrémente le nb de vies

// refresh l'interface après chaque action
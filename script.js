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

let displayWord = "";
document.getElementById("secretWord").innerHTML = displayWord;

// display work remplace les lettres non encore trouvées par des * et les lettre trouvée par la lettre elle même
// ex d**n***

// recupère le click sur le bouton validdate
// chope la lettre entrée dans l'input
// si il y plus d'une char -> retourne une alerte

// vérification de l'existence de la lettre dans le mot 
// Si ok -> on ajoute la lettre dans findLetters -> QUI EST UN ARRAY
// Si nok -> on décrémente le nb de vies

// refresh l'interface après chaque action
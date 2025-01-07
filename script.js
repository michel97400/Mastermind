let tableauSaisie = []
let tableauHasard = []



/* Selectionner la balise form qui contient le champ chiffre et le bouton */
const form = document.querySelector("form");

/* Quand le bouton Envoyer est cliquer*/
form.addEventListener("submit", (event) => {
    /* je desactive le rechargement de la page*/
    event.preventDefault();;
    /* je récupére le champ des chiffres */
    /* je stocke les chiffres dans un tableau */
    let baliseChiffre1 = document.getElementById("chiffre1");
    tableauSaisie[0] = baliseChiffre1.value;
    let baliseChiffre2 = document.getElementById("chiffre2");
    tableauSaisie[1] = baliseChiffre2.value;
    let baliseChiffre3 = document.getElementById("chiffre3");
    tableauSaisie[2] = baliseChiffre3.value;
    let baliseChiffre4 = document.getElementById("chiffre4");
    tableauSaisie[3] = baliseChiffre4.value;
    console.log(tableauSaisie)
});

/* fonction pour généré 4 chiffre aleatoire */
function genererNombreAleatoire() {
    min = Math.ceil(1);
    max = Math.floor(4)
    for (let i = 0; i < 4; i++) {
        tableauHasard[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        
    }
    return tableauHasard
}

nombreAleatoire = genererNombreAleatoire()

function verifier(params) {
    
}
















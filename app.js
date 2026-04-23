
//   <section id="seksjon-2-dreamweavers-delight">
//   DOM
const ingredienser = [
    "🌙 Månedugget blåbær",
    "✨ Støv fra en sovende fe",
    "🍄 Trollskogens røde sopp",
    "💧 Vann fra den glemte kilden",
    "🌿 Tre blader av drømmemynte"
];

const knapp = document.getElementById("avslør-knapp");
const liste = document.getElementById("ingrediens-liste");

function avslørIngredienser() {

    for (let i = 0; i < ingredienser.length; i++) {
        liste.innerHTML += "<li>" + ingredienser[i] + "</li>";
    }

    liste.style.display = "block";
    knapp.style.visibility = "hidden";
}


// <section id="seksjon-3-om-oss">
// loop

const grunner = [
    "🍺 Alltid kaldt øl og varme peiser",
    "🧌 Vennlig betjening – selv trollene smiler",
    "🎵 Levende musikk hver fredag av bardene fra Silvermoor",
    "🍖 Hjemmelaget trollgryte som varmer sjel og mage",
    "✨ Den eneste tavernen i kongeriket med magisk belysning"
];

const grunnListe = document.getElementById("grunner-liste");

for (let i = 0; i < grunner.length; i++) {
    grunnListe.innerHTML +=  "<li>" + grunner[i] + "</li>";
}







//<section id="seksjon-4-kontakt">
// variabel, conditionals, element som endrer seg 


const sendKnapp = document.getElementById("send-knapp");

sendKnapp.addEventListener("click", function () {

    const navn = document.getElementById("navn-felt").value;
    const melding = document.getElementById("melding-felt").value;
    const feilMelding = document.getElementById("feil-melding");
    const skjemaContainer = document.getElementById("skjema-container");

    // Conditional, sjekk navn
    if (navn === "") {
        feilMelding.textContent = "⚠️ Du må fylle inn navnet ditt, ærede gjest!";
        return;
    }

    // Conditional, sjekk melding
    if (melding === "") {
        feilMelding.textContent = "⚠️ Du må skrive en melding!";
        return;
    }

    // Element som endrer seg, skjemaet byttes ut med en takkemelding
    skjemaContainer.innerHTML = "<h3>Takk, " + navn + "! 🐦</h3><p>Meldingen din er sendt med ravnepost. Grumble Trollbrew vil svare deg snart!</p>";

});


// <footer>

const årstall = new Date().getFullYear();
document.getElementById("årstall").textContent = årstall;
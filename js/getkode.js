// Generer en tilfældig 4-cifret kode
const kode = Math.floor(1000 + Math.random() * 9000).toString();
console.log("Den hemmelige kode er: " + kode); // Bruges til debuggin

function tjekGet() {
  const uinput = document.getElementById("user-input").value;
  let r = "";

  //Tjek og input har præcist 4 cifre
  if (uinput.length !== 4 || isNaN(uinput)) {
    document.getElementById("resultat").innerHTML =
      "Du skal indtaste et 4-cifret tal.";
    return;
  }

  if (uinput === kode) {
    document.getElementById("resultat").innerHTML +=
      "Tillykke! du har gættet rigtigt";
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (uinput[i] === kode[i]) {
      r += `Ciffer ${uinput[i]} er korrekt og står på den rigtige plads.<br>`;
    } else if (kode.includes(uinput[i])) {
      r += `Ciffer ${uinput[i]} er korrekt, men står ikke på den rigtige plads.<br>`;
    } else {
      r += `Ciffer ${uinput[i]} er ikke en del af koden.<br>`;
    }
  }
  // viser resultatet til brugeren
  document.getElementById("resultat").innerHTML = r;
}

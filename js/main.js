/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine:
 nome, cognome e età.
Buon lavoro, vi ricordo che oggi avrete ancora la possibilità di aprire dei ticket per problematiche relative a questo esercizio :)*/
/*
var k = {
  nome: "putin",
  cognome: "trump",
  eta: "24",
};
for (var pippo in k) {
  console.log(`${pippo}: ${k[pippo]}`);
}
*/

const studente = { nome: "alice", cognome: "bob", eta: "24" };

for (const property in studente) {
  console.log(`${property}: ${studente[property]}`);
}

var oggetto_studenti = [
  (studente_1 = {
    nome: "joe",
    cognome: "dalton",
    eta: 33,
  }),
  (studente_2 = {
    nome: "martini",
    cognome: "costa",
    eta: 60,
  }),
];
console.log(oggetto_studenti);

for (var i = 0; i < oggetto_studenti.length; i++) {
  console.log(oggetto_studenti[i].nome);
  console.log(oggetto_studenti[i].cognome);
}

var a = prompt("nome");
var b = prompt("cognome");
var c = parseInt(prompt("eta"));
var nuovo_studenti = {};
nuovo_studenti.nome = a;
nuovo_studenti.cognome = b;
nuovo_studenti.eta = c;
oggetto_studenti.push(nuovo_studenti);
console.log(oggetto_studenti);

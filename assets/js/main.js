"use strict";

// ===================================================
//      	  JS-Vertiefung – Objects I
// ===================================================

// ===================================================
//      	JS-Vertiefung – Objects-Level_1_2
// ===================================================

console.log("%c JS-Vertiefung – Objects-Level_1_2", "color: tomato");

const person = {
	name: "Rainer",
	alter: 50,
	// sagNameAlter: (name, alter) => alert(`${this.name} ${this.alter}`),
	sagNameAlter: function () {
		alert(`${this.name} ${this.alter}`);
	},
};
console.log(person.name);
console.log(person.alter);
// person.sagNameAlter();

// ===================================================
//      	JS-Vertiefung – Objects-Level_1_4
// ===================================================

console.log("%c JS-Vertiefung – Objects-Level_1_4", "color: tomato");

// Aufgabenstellung:
// Lernziel: Auf Objekte zugreifen
// Verwende den vorgegebenen Code (siehe Code-Snippet)
// Greife auf die Werte "Nala" und "Droopy" in diesem Objekt zu
// Lasse dir einmal alle Hundenamen anzeigen
// Nutze eine Methode, um die Hundenamen zu ändern

let unsereHaustiere = [
	{
		tiertyp: "Katze",
		names: ["Gipsy", "Nala", "Dinky"],
	},
	{
		tiertyp: "Hunde",
		names: ["Knöpfchen", "Pinselchen", "Droopy"],
	},
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);

unsereHaustiere[1].names[0] = "Lassie";
console.log(unsereHaustiere[1].names);

const unsereHaustiere2 = { ...unsereHaustiere };
unsereHaustiere2[1].names[1] = "Bello";
console.log(unsereHaustiere2[1].names);

// ===================================================
//      	JS-Vertiefung – Objects-Level_1_5
// ===================================================

console.log("%c JS-Vertiefung – Objects-Level_1_5", "color: tomato");

// Aufgabenstellung:

// In dieser Übung lernen wir, wie man auf die Objekt-Inhalte zugreift.
// Verwende den Code aus dem Kommentar.
// Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
// Geheimnisse
// Cola
// Hefter

let unserLager = {
	schreibtisch: {
		schublade: "Hefter",
	},
	schrank: {
		"Obere Schublade": {
			Ordner1: "Dokumente",
			Ordner2: "Geheimnisse",
		},
		"Untere Schublade": "Cola",
	},
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// ===================================================
//      	JS-Vertiefung – Objects-Level_1_7
// ===================================================

console.log("%c JS-Vertiefung – Objects-Level_1_7", "color: tomato");

// Aufgabenstellung:
// Lernziel: Zugriff auf Objekte mit Hilfe von forEach()
// Verwende den vorgegebenen Code (siehe Code-Snippet)
// Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach() im HTML aus:
// Alle "artist"
// Alle "title"
// Alle "medium"

let myMusic = [
	{
		artist: "The Beatles",
		title: "Abbey Road",
		release_year: 1969,
		medium: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
	{
		artist: "Pink Floyd",
		title: "Dark Side of the Moon",
		release_year: 1978,
		medium: ["CS", "CD", "LP", "Download"],
		gold: true,
	},
	{
		artist: "Led Zeppelin",
		title: "Led Zeppelin IV",
		release_year: 1971,
		medium: ["CS", "LP", "Download"],
		gold: true,
	},
	{
		artist: "Metallica",
		title: "Kill ’Em All und Ride the Lightning",
		release_year: 1983,
		medium: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
];
const output = document.querySelector("#output");

myMusic.forEach((elem) => {
	// console.log(elem);
	// console.log(elem.artist);
	// console.log(elem.title);
	// console.log(elem.medium);

	output.innerHTML += `${elem.artist}<br>`;
	output.innerHTML += `${elem.title}<br>`;
	output.innerHTML += `${elem.medium.join(", ")}<br>`;
	output.innerHTML += `<p>&nbsp;</p>`;
});

// ===================================================
//      	JS-Vertiefung – Objects-Level_1_8
// ===================================================

console.log("%c JS-Vertiefung – Objects-Level_1_8", "color: tomato");

// Aufgabenstellung:
// Lernziel: Zugriff auf Objekte mit Hilfe von forEach und/oder map
// Verwende den vorgegebenen Code (siehe Code-Snippet)
// Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
// Schreibe eine Funktion für das Objekt, die in der Konsole folgendes ausgibt:
// name
// coop
// city
// emails

let studentData = [
	{
		name: "Alex",
		age: 23,
		coop: false,
		address: {
			street: "Don Valley Business Park",
			city: "Toronto",
			postalCode: "ONM3C3E5",
		},
		emails: ["alex69@gmail.com", "alex123@yahoo.com"],
	},
	{
		name: "Sandra",
		age: 22,
		coop: true,
		address: {
			street: "34 Lawrence Ave",
			city: "Toronto",
			postalCode: "ONM3C0E5",
		},
		emails: ["sandra@gmail.com", "sandra@yahoo.com"],
	},
];

studentData.forEach((elem) => {
	console.log(elem);
	console.log(elem.name);
	console.log(elem.coop);
	console.log(elem.address.city);
	console.log(elem.emails.join(', '));
});

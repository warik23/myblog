document.getElementById("beirt").value = "";
function getRandom(max) {
	return Math.floor(Math.random() * max);
}

const randszam = getRandom(10);

let triess = document.getElementById("vicces");
let tries = 5;
triess.innerText = tries;

function Check() {
	let beirt = document.getElementById("beirt").value;
	let doboz = document.getElementById("doboz");

	if (beirt > randszam) {
		doboz.innerText = "Általad tippelt szám nagyobb!";
		tries--;
		triess.innerText=tries;
		console.log(tries);
	} else {
		doboz.innerText = "Általad beírt szám kisebb!";
		tries--;
		triess.innerText=tries;
		console.log(tries);
	}
	if (beirt == randszam) {
		doboz.innerText = "Gratulálok nyertél.";
		document.getElementById("gomb").disabled=true;
	}
	if ((tries == 0)) {
		doboz.innerText = "Vesztettél!";
		document.getElementById("gomb").disabled=true;
	}
}

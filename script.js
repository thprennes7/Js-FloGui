
//Exo 1

var footer = document.getElementsByTagName("footer")[0];

let footerI = 0;

function footerClick() {
	footerI++;
	console.log('clique' + footerI);
}

footer.addEventListener("click", footerClick);

//Exo 2

var hamburger = document.getElementsByClassName("navbar-toggler")[0];
var burger = document.getElementById("navbarHeader")

function burgerClick() {
	burger.classList.toggle("collapse");
}

hamburger.addEventListener("click", burgerClick);

//Exo 3

var editFirstCard = document.getElementsByClassName("btn-outline-secondary")[0];

var textFirstCard = document.getElementsByClassName("card-text")[0];

function textToRed() {
	textFirstCard.style.color = "red";
}

editFirstCard.addEventListener("click", textToRed);

//Exo 4

var editSecondCard = document.getElementsByClassName("btn-outline-secondary")[1];

var textSecondCard = document.getElementsByClassName("card-text")[1];

function textToGreen() {
	if (textSecondCard.style.color == "")
		textSecondCard.style.color = "green";
	else
		textSecondCard.style.color = "";
}

editSecondCard.addEventListener("click", textToGreen);

//Exo 5

var link = document.getElementsByTagName("link")[0];

var header = document.getElementsByTagName("header")[0];

function byeBootstrap() {
	if (link.rel == "none"){
		link.rel = "stylesheet";
	}
	else{
		link.rel = "none";
	}
}

header.addEventListener("dblclick", byeBootstrap);
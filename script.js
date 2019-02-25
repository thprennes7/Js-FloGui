
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

//Exo 6

let viewBtn = document.getElementsByClassName("btn-success");

let cardText = document.getElementsByClassName("card-text");

let cardImg = document.getElementsByClassName("card-img-top");

let cards = document.getElementsByClassName("card");

function onMouseOverBtn(x) {

	if (cardText[x].style.display == "none"){
		cardText[x].style.display = "block";
	} else {
		cardText[x].style.display = "none";
	};

	if (cardImg[x].height == "80%"){
		cardImg[x].height = "100%";
	} else {
		cardImg[x].height = "80%";
	};
}

for (let x = 0; x < viewBtn.length; x++){
	viewBtn[x].addEventListener("mouseover", function() {

		if (cardText[x].style.display == "none"){
			cardText[x].style.display = "block";
		} else {
			cardText[x].style.display = "none";
		};

		if (cardImg[x].style.width == "80%"){
			cardImg[x].style.width = "100%";
		} else {
			cardImg[x].style.width = "80%";
			cardImg[x].style.margin = "auto";
		};
	});
};

//Exo 7

let cardsCol = document.getElementsByClassName("col-md-4"), forwardBtn = document.getElementsByClassName("btn-secondary");

function flexCards(){
	for(let x = 0; x < cardsCol.length; x++){
		cardsCol[x].style.order = x;
	}
}

flexCards();

forwardBtn[0].addEventListener("click", function(e){
	e.preventDefault();
	for (let x = 0; x < cardsCol.length; x++){
		if (cardsCol[x].style.order == 5){
			cardsCol[x].style.order = 0;
		} else {
			cardsCol[x].style.order = parseInt(cardsCol[x].style.order) + 1;
		};
	};
})

//Exo 8

let backwardBtn = document.getElementsByClassName("btn-primary");

backwardBtn.href = "#"

backwardBtn[0].addEventListener("click", function(e){
	e.preventDefault();
	for (let x = 0; x < cardsCol.length; x++){
		if (cardsCol[x].style.order == 0){
			cardsCol[x].style.order = 5;
		} else {
			cardsCol[x].style.order = parseInt(cardsCol[x].style.order) - 1;
		};
	};
})

//Exo 9

var navLogo = document.getElementsByClassName("navbar-brand")[0];
var html = document.getElementsByTagName("html")[0];
var body = document.getElementsByTagName("body")[0];

navLogo.addEventListener("focus", function(e) {
	e.preventDefault();
	document.addEventListener("keydown", focused)
})
navLogo.addEventListener("blur", function(e) {
	e.preventDefault();
	document.removeEventListener("keydown", focused);
})

function focused(event) {
	switch (event.key) {
		case "a":
		html.classList.add("row");
		html.classList.remove("justify-content-md-center");
		html.classList.remove("justify-content-md-end");
		html.classList.add("justify-content-md-start");
		body.classList.add("col");
		body.classList.add("col-lg-4");
		break;
		case "y":
		html.classList.add("row");
		html.classList.remove("justify-content-md-start");
		html.classList.remove("justify-content-md-end");
		html.classList.add("justify-content-md-center");
		body.classList.add("col");
		body.classList.add("col-lg-4");
		break;
		case "p":
		html.classList.add("row");
		html.classList.remove("justify-content-md-center");
		html.classList.remove("justify-content-md-start");
		html.classList.add("justify-content-md-end");
		body.classList.add("col");
		body.classList.add("col-lg-4");
		break;
		case "b":
		html.classList.remove("row");
		html.classList.remove("justify-content-md-center");
		html.classList.remove("justify-content-md-end");
		html.classList.remove("justify-content-md-start");
		body.classList.remove("col");
		body.classList.remove("col-lg-4");
		break;
		default:
		break;
	}
}
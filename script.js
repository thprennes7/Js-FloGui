
// Exo 1

// Fetching the footer
var footer = document.getElementsByTagName("footer")[0];

// Initializing an iterator
let footerI = 0;

// Logs the number of clicks in the console
function footerClick() {
	footerI++;
	console.log('clique' + footerI);
}

// Initializes the footerClick function when footer is clicked
footer.addEventListener("click", footerClick);

// Exo 2

// Fetch the button and the header
var hamburger = document.getElementsByClassName("navbar-toggler")[0];
var burger = document.getElementById("navbarHeader")

// Adds class collapse to the header
function burgerClick() {
	burger.classList.toggle("collapse");
}

// Initializes the burgerClick function when header button is clicked
hamburger.addEventListener("click", burgerClick);

// Exo 3

// Fetches the Edit button and the text from the first card in the HTML file
var editFirstCard = document.getElementsByClassName("btn-outline-secondary")[0];

var textFirstCard = document.getElementsByClassName("card-text")[0];

// Adds the red color style to the firs card's text
function textToRed() {
	textFirstCard.style.color = "red";
}

// Initializes the textToRed function when the first card's edit button is clicked
editFirstCard.addEventListener("click", textToRed);

// Exo 4

// Fetches the second card's edit button and the second card's text
var editSecondCard = document.getElementsByClassName("btn-outline-secondary")[1];

var textSecondCard = document.getElementsByClassName("card-text")[1];

// Adds or removes the green color style to the second card's text
function textToGreen() {
	if (textSecondCard.style.color == "")
	textSecondCard.style.color = "green";
	else
	textSecondCard.style.color = "";
}

// Initializes the textToGreen function when the second card's edit button is clicked
editSecondCard.addEventListener("click", textToGreen);

// Exo 5

// Fetches the first link tag, which is loading the Bootstrap CSS, and the header
var link = document.getElementsByTagName("link")[0];

var header = document.getElementsByTagName("header")[0];

// DESTROY BOOTSTRAP
function byeBootstrap() {
	if (link.rel == "none"){
		link.rel = "stylesheet";
	}
	else{
		link.rel = "none";
	}
}

// When double-clicking, initializes the byeBootstrap function
header.addEventListener("dblclick", byeBootstrap);

// Exo 6

// Fetches all view buttons, all cards' texts, all cards' images and all cards
let viewBtn = document.getElementsByClassName("btn-success");

let cardText = document.getElementsByClassName("card-text");

let cardImg = document.getElementsByClassName("card-img-top");

let cards = document.getElementsByClassName("card");

// Changes the display of the text and the size of the image when hovering the view button
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

// Exo 7

// Fetches the columns of the cards and the forward button
let cardsCol = document.getElementsByClassName("col-md-4"), forwardBtn = document.getElementsByClassName("btn-secondary");

// Adds a flex order to the columns
function flexCards(){
	for(let x = 0; x < cardsCol.length; x++){
		cardsCol[x].style.order = x;
	}
}

// Initiates the flexCards function
flexCards();

// On click the columns cycle through the flex order from 0 to 5 and go back to 0 if they hit 5
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

// Exo 8

// Fetches the backward button
let backwardBtn = document.getElementsByClassName("btn-primary");

// Does the inverse of the forward button click, cycles from 5 to 0 and resets to 5 when hitting 0
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

// Exo 9

// Fetch Logo, html and the body
var navLogo = document.getElementsByClassName("navbar-brand")[0];
var html = document.getElementsByTagName("html")[0];
var body = document.getElementsByTagName("body")[0];

// If focused listens for the key down and initiates the focused event, if not focused removes the listener
navLogo.addEventListener("focus", function(e) {
	e.preventDefault();
	document.addEventListener("keydown", focused)
})
navLogo.addEventListener("blur", function(e) {
	e.preventDefault();
	document.removeEventListener("keydown", focused);
})

// This function looks for the keys pressed and adds classes to the html and body accordingly
function focused(event) {
	switch (event.key) {
		// If a is pressed justifies left the whole page
		case "a":
		html.classList.add("row");
		html.classList.remove("justify-content-md-center");
		html.classList.remove("justify-content-md-end");
		html.classList.add("justify-content-md-start");
		body.classList.add("col");
		body.classList.add("col-lg-4");
		break;
		// If y is pressed centers the page
		case "y":
		html.classList.add("row");
		html.classList.remove("justify-content-md-start");
		html.classList.remove("justify-content-md-end");
		html.classList.add("justify-content-md-center");
		body.classList.add("col");
		body.classList.add("col-lg-4");
		break;
		// If p is pressed justifies right the page
		case "p":
		html.classList.add("row");
		html.classList.remove("justify-content-md-center");
		html.classList.remove("justify-content-md-start");
		html.classList.add("justify-content-md-end");
		body.classList.add("col");
		body.classList.add("col-lg-4");
		break;
		// If b is pressed the page is back to normal
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

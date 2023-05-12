const demo = document.getElementById("demo");
const helloWorld = document.getElementById("hello");
const emeraldOre = document.getElementById("EmeraldOre");

function showButton() {
	helloWorld.style.color = "red";
	helloWorld.style.fontSize = "50px";
	helloWorld.style.display = "block";
}

function hideButton() {
	helloWorld.style.display = "none";
}

function showImage() {
	emeraldOre.style.display = "block";
}

const styleButton = document.getElementById("styleButton");
styleButton.addEventListener("click", showButton);

function mouseOver() {
	$("#minecraft").style.color = "red";
}
function mouseUp() {
	$("#minecraft").style.color = "lightBlue";
}
function mouseDown() {
	$("#minecraft").style.color = "green";
}
function mouseOut() {
	$("#minecraft").style.color = "orange";
}

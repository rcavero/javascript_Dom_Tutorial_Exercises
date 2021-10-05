let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let smth = document.createElement("div");
	smth.innerHTML = "Hello World";
	smth.style.background = "yellow";
	document.body.appendChild(smth);
});
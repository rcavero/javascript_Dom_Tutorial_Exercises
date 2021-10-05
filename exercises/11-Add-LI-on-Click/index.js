let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let parent1 = document.querySelector("#myList")
	let smth = document.createElement("li");
	smth.innerHTML = "Forth element";
	parent1.appendChild(smth);
});

window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};
let button2 = document.querySelector("#button2")
button2.addEventListener('click', function(){
	alert("I said don't click me!")
})
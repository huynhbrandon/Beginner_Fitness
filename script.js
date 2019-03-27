//night mode
document.body.style.backgroundColor = sessionStorage.getItem('background-color'); //set storage to current color

function night() {
	if (sessionStorage.getItem("background-color") == 'black') { //if dark, change to white

			sessionStorage.setItem("background-color", "white");
			document.body.style.backgroundColor = sessionStorage.getItem('background-color');

	}
	else {
			sessionStorage.setItem("background-color", "black"); 
			document.body.style.backgroundColor = sessionStorage.getItem('background-color');

	}
}
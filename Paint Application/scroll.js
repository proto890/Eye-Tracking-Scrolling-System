
function scrollOneDown(){
	var elmnt = document.getElementById("content");
	elmnt.scrollTop += 120;
}

function scrollTenDown(){
	var elmnt = document.getElementById("content");
	elmnt.scrollTop += 1200;
}

function scrollOneUp(){
	var elmnt = document.getElementById("content");
	elmnt.scrollTop -= 120;
}

function scrollTenUp(){
	var elmnt = document.getElementById("content");
	elmnt.scrollTop -= 1200;
}

function hoverTenUp(){
	var elmnt = document.getElementById("content");
	elmnt.scrollTop -= 120;
}



function hoverTenDown(){
	var elmnt = document.getElementById("content");
	elmnt.scrollTop += 120;
}

function hoverOneUp(){
	var elmnt = document.getElementById("content");
	elmnt.scrollTop -= 50;
}

function hoverOneDown(){
	var elmnt = document.getElementById("content");
	elmnt.scrollTop += 50;
}

function scrollOneUpHover(){
	s = setInterval(hoverOneUp, 70);
}

function scrollTenUpHover(){
	s = setInterval(hoverTenUp, 70);
}

function scrollOneDownHover(){
	s = setInterval(hoverOneDown, 70);
}

function scrollTenDownHover(){
	s = setInterval(hoverTenDown, 70);
}

function clearScroll(){
	clearInterval(s);

}
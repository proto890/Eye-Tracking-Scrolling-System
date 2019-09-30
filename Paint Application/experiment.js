var cID;

var canvas = document.createElement('canvas');





canvas.id = "bottomLayer";
canvas.width = 800;
canvas.height = 400;
canvas.style.zIndex = 0;

canvas.style.position = "absolute";
canvas.style.border = "1px solid";


var body = document.getElementsByTagName("div")[0];
body.appendChild(canvas);

cursorLayer = document.getElementById("bottomLayer");

console.log(cursorLayer);

function addLayer(){

	body.appendChild(canvas.cloneNode());



}

function switchLayer(){
	
	var canvas2 = document.createElement('canvas');

	canvas2.id = "bottomLayer";
	canvas2.width = 800;
	canvas2.height = 400;
	canvas2.style.zIndex = 0;
	canvas2.style.position = "absolute";
	canvas2.style.border = "1px solid";


	var body = document.getElementsByTagName("div")[0];
	body.appendChild(canvas2);

	cursorLayer = document.getElementById("bottomLayer");

	document.getElementById("bottomLayer").id = "disabled";
	

}

function removeLayer(){
	tags = document.querySelectorAll('[id="bottomLayer"]');
	tags[tags.length - 1].remove();
	tags = document.querySelectorAll('[id="disabled"]');
	tags[tags.length - 1].id = "bottomLayer";

	document.getElementById("table").deleteRow(tags.length+1);

}







Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}




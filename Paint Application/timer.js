function getMoving(){
	startTime = new Date();
	var element = document.getElementById(100);
    element.parentNode.removeChild(element);

	console.log("help");
	
}

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  alert("Your time was : " + seconds + " seconds");
  console.log("nope");
}


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	end();
    }
}


window.onload = pageLoad;

function pageLoad(){
	var startButton = document.getElementById("start");
	startButton.onmousedown = startGame;
	var gameLayer = document.getElementById("game-layer");
	var gameContainer = document.getElementById("game-container");
	

}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}


function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.1; 
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	clearInterval(timer);
	timer = setInterval(timeCount,TIMER_TICK);
	x.innerHTML = second;
	

	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		second -= 1;
		x.innerHTML = second;
		
		if(second < 0){

			clearInterval(timer);
			clearScreen();
			alert("Game over")
		}
		if(second >= 0 && allbox.length ===0)
		{
			clearInterval(timer);
			alert("You win!");

		}

	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#game-layer div");
	for(var i=0;i<addBox.length;i++){

		allbox[i].parentNode.removeChild(allbox[i]);
	}

}



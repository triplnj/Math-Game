
var playing = false;
var score;
var action;
var timeremain;
var correctAnswer;
//if we click start/reset button
document.getElementById("startreset").onclick = function(){
			
	//if we are playing
	if(playing == true){
		location.reload();//reload page
		
	}else{//if we are not playing
		//change mode to playing
		
		playing = true;

	//set score to 0
	score = 0;
	document.getElementById("scorevalue").innerHTML = score;
		//show countdown box
	
		show("time");
		timeremain = 60;
		document.getElementById("timevalue").innerHTML = timeremain;
		hide("gameover");
		//change button text ot reset
	document.getElementById("startreset").innerHTML = "Reset Game";
		
		//start countdown
		startCountdown();
		
		//generate Q&A
		generateQA();
}
}
//functions
//Clicking on answer box
for(i=1;i<5;i++){
	document.getElementById("box"+i).onclick = function(){
	
	if(playing == true){
		if(this.innerHTML == correctAnswer){
			//correct answer
			score++;
			document.getElementById("scorevalue").innerHTML=score;
			//show Correct box and hide Wrong box
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct");
			}, 1000);
			//generate new QA
			generateQA();
		}else{
			//wrong answer
			hide("correct");
			show("wrong");
			setTimeout(function(){
				hide("wrong");
			}, 1000);
		}
	}
}
}


//start counter
function startCountdown(){
	action = setInterval(function(){
		timeremain -= 1;
		document.getElementById("timevalue").innerHTML = timeremain;
		if(timeremain == 0){
			stopCountdown();
			
			show("gameover");
			hide("time");
			document.getElementById("startreset").innerHTML = "Start Game";
			document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + score + "</p>";
			
			hide("correct");
			hide("wrong");	
			
			playing = false;
			
			
		}
	}, 1000);
}
//stop counter
function stopCountdown(){
	//game over
			clearInterval(action);
}
//hide an element
function hide(Id){
	document.getElementById(Id).style.display = "none";
}
//show an element
function show(Id){
	document.getElementById(Id).style.display = "block";
}
function generateQA(){
	var x = 1 + Math.round(Math.random()*10);
	var y = 1 + Math.round(Math.random()*10);
	correctAnswer = x*y;
	
	
	document.getElementById("question").innerHTML = x + "x" + y;
	var correctPosition = 1 + Math.round(Math.random()*3);
	document.getElementById("box"+correctPosition).innerHTML = correctAnswer;//fill one box with correct answer
	
	//fill other boxes with other answers
	var answers = [correctAnswer];
	
	for(i=1;i<5;i++){
		if(i != correctPosition){
			var wrongAnswer;
			
			do{
				wrongAnswer = (1 + Math.round(Math.random()*10))*
				(1 + Math.round(Math.random()*10));;
			}while(answers.indexOf(wrongAnswer)>-1);
		
			document.getElementById("box"+i).innerHTML = wrongAnswer;
			
			answers.push(wrongAnswer);
			
			}
	}
}



//if click on answer box
//if we are playing
//correct?
//if yes -> increase score by 1
//show correct box for 1sec
//generate new q&a 
//if no-> show try again box for 1sec



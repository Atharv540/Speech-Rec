
var myRec, para, blah, speech, timeH, timeM;


function setup()
{
	// graphics stuff:
	createCanvas(800, 400);
	background(255, 255, 255);
	fill(0, 0, 0, 255);
	// instructions:
	textSize(32);
	textAlign(CENTER);
	//text("say something", width/2, height/2);
	myRec = new p5.SpeechRec(); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = false;
	myRec.onResult = showResult;
	speech = new p5.Speech("Google UK English Female");
	speech.setVoice("Google UK English Female")
	para = createP();
	blah = para.html();
	myRec.start();
}

function draw()
{
	// why draw when you can talk?
	//showResult();
	timeH = hour();
	timeM = minute();
	myRec.onResult = showResult;
}


function showResult()
{
	if(myRec.resultValue==true) {
		//background(192, 255, 192);
		para.html(blah+myRec.resultString);
		//speech.speak("You said "+myRec.resultString);
		let listL = myRec.resultString.split(" ");
		for(i=0; i<listL.length; i++){
			if(listL[i]==="time"){
				speech.speak("The current time in your computer is"+ timeH % 12+" "+timeM);
			}
		}
		for(i=0; i<listL.length; i++){
			if(listL[i]==="hello" || listL[i]==="hi" || listL[i]==="hiya" || listL[i]==="howdy" || listL[i]==="greetings"){
				speech.speak("Oh! Greetings from my side too!")
			}
		}
		for(i=0; i<listL.length; i++){
			if(listL[i-2]==="happy" && listL[i]==="song" || listL[i-1]==="birthday"){
				speech.speak(" I am not that good at singing but here goes,     Happy Birthday to you, Happy Birthday to you, Happy Birthday happy birthay happy birthday to you, May God bless you, May God bless you Happy Birthday Happy Birthday Happy Birthday to you! ")
			}
		}

		//console.log(myRec.resultString);
	}
}

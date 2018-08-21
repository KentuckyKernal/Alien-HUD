"use strict";
//Intro text
const txt = 'Subject 0897: Predator';

//object template serves target circles
//object chosen as there are 5 circles each requiring 
//the same structure

class InfoEx {
  constructor(title, content,img) {
    this.Title = title;
    this.Content = content;
	this.Img = img;
  }
  PrintImg(){
	  let printline = document.createElement("objectImg");
	  printline.setAttribute('id', 'objectImg');
	  printline.innerHTML = "<img src=" + this.Img + " width='400px' height='auto' >";
	  document.getElementById('imgSpace').appendChild(printline);
	  
  }
  
  //append element 
  PrintTitle (){
  
	  let printline = document.createElement("hoverTitle");
	  printline.setAttribute('id', 'hoverTitle');
	  document.getElementById('title').appendChild(printline);
	  
		//Intro text => string => sequential list of characters
		
		for (let i=0; i < this.Title.length; i++) {

				setTimeout( () => 
				{
					printline.style.color = '#42eb42';
					printline.style.fontSize = "22px";
					printline.style.textShadow = "0 0 1px #42eb42";
					printline.innerHTML += this.Title.charAt(i);
					
				}, i*40 );
			};

	}

	PrintContent(){
	
		let printline = document.createElement("hoverContent");
		  printline.setAttribute('id', 'hoverContent');
		  document.getElementById('content').appendChild(printline);
		  
			//Intro text => string => sequential list of characters
			
			for (let i=0; i < this.Content.length; i++) {

					setTimeout( () => 
					{
						printline.style.color = '#42eb42';
						printline.style.fontSize = "18px";
						printline.style.textShadow = "0 0 1px #42eb42";
						printline.innerHTML += this.Content.charAt(i);
						
					}, i*40 );
				};
	}
	
//remove all appended elements
	RemoveElements(){
		let rTitle = document.getElementById('title');
		rTitle.removeChild(hoverTitle);
		let rContent = document.getElementById('content');
		rContent.removeChild(hoverContent);
		let rImg = document.getElementById('imgSpace');
		rImg.removeChild(objectImg);
	}

}//end class

const circle1 = new InfoEx('Bio-Mask', "The Bio-Mask is one of the main tools used by the Yautja. As well as performing the basic function of protecting a Predator's head, the mask also grants the wearer access to multiple vision modes including zoom capabilities, facilitates Vocal Mimicry, and includes breathing apparatus, diagnostics, and visual and audio recording systems. The mask often also incorporates a red targeting laser used in conjunction with a Plasmacaster.",'https://vignette.wikia.nocookie.net/avp/images/c/cd/Laser01.PNG/revision/latest/scale-to-width-down/250?cb=20120618195551');
//..
const circle5 = new InfoEx('A Deadly Relationship',"The Yautja are a sentient, humanoid race that breathe an atmosphere similar to that of Earth's, but possess a level of technological advancement far in excess of anything available to humans. The Predators stalk and kill their prey using a combination of highly advanced technology, such as active camouflage and energy weapons, combined with traditional ancient weapons, such as blades, spears and nets. The Predators often ritualistically mutilate their prey and usually claim a trophy from their kills. Capable of interstellar travel in star ships, the Predators have hunted on Earth for centuries and have also had prior contact with the Engineers. They have been known to deliberately breed Xenomorphs in order to hunt them, often as part of initiation rituals for young Predators.",'https://media.giphy.com/media/G2xgQd544uo0g/giphy.gif');


//jQuery is separated from class above to avoid concole error
$(document).ready(function(){


$(".predator").hide();
$(".line1").hide();
$(".line2").hide(); 
$(".circle").hide();
$(".circle2").hide();
$(".circle3").hide();
$(".circle4").hide();
$(".circle5").hide();
$(".heartbeat").hide();
$(".heatRate").hide();
$(".idInterface").hide();
$(".processing").hide();
$(".processing1").hide();
$(".scanning").hide();
$(".proccesingText").hide();
$(".complete").hide();
$(".status").hide();
$(".void").hide();


//event triggered by the user
//Eventlistener
$("button").click( () => //function() 
{
	$(".welcome").fadeOut('fast');
	$(".intlineone").delay(2000).animate({left: '-=2000'},'slow');
	$(".intlinetwo").animate({left: '-=2000'},'slow');
	$(".intlinetwo").animate({top: '+=50'},'slow');
	//anonymous callback function w. arrow notation
	$(".void").delay(3000).fadeIn('very slow', () => {
	//Dynamic HTML
	for (let i=0; i<txt.length; i++) {

			setTimeout( () => //function timer()
			{
			// var text is equivilant to $("#id/.class")
			// DOM = document -> Element -> id/class
			let text = document.getElementById("lifeform");
			text.style.color = '#fd0';
			text.style.fontSize = "28px";
			text.style.textShadow = "0 0 1px #42eb42";
			text.innerHTML += txt.charAt(i);
			text.style.marginBottom = "-40px";
			text.style.marginTop = "10px";
			
			}, i*150 );
		};
	$("#lifeform").delay(3500).fadeOut(250).fadeIn(250);
	
	
	
	

	$(".idInterface").delay(3000).fadeIn('very slow');
	$(".ContainerBox").delay(4000).fadeIn('fast');
	$(".ContainerBox").animate({opacity: '0.6'},'slow');
    $(".ContainerBox").animate({width: '600px'},'slow');
	$(".ContainerBox").animate({height: '700px'}, 'slow', () => {
		//Dynamic HTML 
		for (let i=0; i<168; i++) {

			setTimeout( () => //function timer()
			{
			let div = document.createElement('grid'+[i]);
			div.innerHTML = "<div style='position: relative; color:white; top: 30%; '><b>+</b></div>";
			//set style
			div.style.position = 'relative';
			div.style.top = '-40px';
			div.style.width = '8.3%';
			div.style.height = '50px';
			div.style.float = 'left';
			div.style.opacity = '0.3';
			div.style.border = '1px solid white';
			div.setAttribute('class', 'square'); //set created element to ('class','classname')
			document.getElementById('dd').appendChild(div);//insert created element to the DOM
			}, i*10 );
			
			
			
		};
		
		//$( ".ContainerBox" ).delay(8000).css( "background-color", "rgba(66, 235, 66, 0.2)" );
		$(".predator").delay(3000).fadeIn('slow');
		
		$(".line1").delay(4500).fadeIn('slow', () => //function()
		{
		    $( ".ContainerBox" ).css( "background-color", "rgba(66, 235, 66, 0.2)" );
			$(".scanning").fadeIn('slow');
			$(".line1").animate({top: '+=700'},'slow');
			$(".line1").animate({top: '-=700'},'slow');
			$(".line1").animate({top: '+=700'},'slow');
			$(".line1").animate({top: '-=700'},'slow');
			$(".line1").fadeOut('slow', () => //function()
			{
			//Anonymoous callback functions to ensure operation has finished completely
				$(".line2").fadeIn('slow');
				$(".line2").animate({left: '+=600'}, 'slow');
				$(".line2").animate({left: '-=600'}, 'slow');
				$(".line2").animate({left: '+=600'}, 'slow');
				$(".line2").animate({left: '-=600'}, 'slow');
				$(".line2").fadeOut( () => // function()
				{
					$(".scanning").fadeOut("slow");
					$(".proccesingText").delay(500).fadeIn('very slow');
					$(".processing").delay(1000).fadeIn('slow');
					$(".processing1").delay(1500).fadeIn('slow');
					$(".proccesingText").delay(2000).fadeOut('very slow');
					$(".complete").delay(3000).fadeIn(function(){
						$(".circle").fadeIn(1000);
						$(".circle2").delay(2000).fadeIn('slow');
						$(".circle3").delay(2500).fadeIn('slow');
						$(".circle4").delay(3000).fadeIn('slow');
						$(".circle5").delay(3500).fadeIn('slow');
						$(".heartbeat").delay(4000).fadeIn('slow');
						$(".heatRate").delay(4000).fadeIn('slow');
						$(".status").delay(4000).fadeIn('slow');
				
				});
			});
		});
	});
	});
	});
	//activated when circles appear
	//jQuery collection here??
	$(".circle").hover(function() {
		$("#imgSpace").fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn('fast');
		circle1.PrintImg();
		circle1.PrintTitle();
		circle1.PrintContent();
	},function() {
		$("#imgSpace").fadeOut('fast');
		circle1.RemoveElements();
	});
	//..	
	$(".circle5").hover(function(){
		$("#imgSpace").fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn('fast');
		circle5.PrintImg();
		circle5.PrintTitle();
		circle5.PrintContent();
	},function(){
		$(".imgSpace").fadeOut('fast');
		circle5.RemoveElements();
	});
}); 
}); 

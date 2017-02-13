
 var cardCount = 0;
 var cardCountTotal = 0;
 var cardSuit = new Array ("Heart", "Diamond", "Club", "Spade");
 var currentCard = cardSuit[0];
 var rando = 0;
 var cardWrite = new Array();
 var x = 0;
 var y = 0;
 
 function numberCalc() {
	 x = document.drawNumber.numba.value;
	 y = Math.pow(0.75, x) * 100;
	 y = Math.round(y * 100000) / 100000;
 } 
  
 function drawCard() {
	 currentCard = cardSuit[0];
     rando = 0;
	 cardCount = 0;
	 cardWrite = [""];
	    while (currentCard != "Spade" && cardCount < x )  {
        rando = Math.floor(Math.random() * 4);
        currentCard = cardSuit[rando];
	    cardCount++;
	    cardWrite.push(currentCard);
	 }
	 if (cardCount < x){
		 cardCountTotal++;
		 drawCard();
	 }
	  else {
	     cardCountTotal++;
	  $(".results").html("<p>It took " + cardCountTotal + " tries </p>");
	  
	  var printThis = "The Cards were: ";
	  for (j=0; j < cardWrite.length; j++) {
		printThis += "<br/>" +cardWrite[j];
		};
		
	  $(".results2").html(printThis);	
		 ;
		 
       $(".results3").html("<h4> Thanks For Playing! </h4>");	
	  };
 }    

 
 function buttonClick() {
	 cardCountTotal = 0;
	 $(".chance").html("<p> The chance of drawing this is : " + y + "%</p>")
	  drawCard();
 }
 

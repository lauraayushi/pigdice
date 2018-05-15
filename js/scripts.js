//business-logic
//before the game starts
function Playername(playername) {
  this.playername = playername;
  this.score = 0;
};
//before initializing of the random number
function Playersturn(playerturn) {
  this.score = 0;
  this.randomnumber = 0;
}
//during intialization of the random number
var rollDice = Mathfloor(Math.random()*6 + 1);
if(rollDice === 1) {
   this.score =0;
   alert("You have scored one.It is now player2 turns")
}else{
   this.score += rollDice;   
}
return rollDice;
// during the next turns of the pigdice game
player1.prototype.rollDice= function () {
return rollDice;
}
player2.prototype.rollDice = function () {
return rollDice;
}
// user-interface
	$(document).ready(function() {
	 $("#former").submit(function(event){
	  $("#outcome").empty();
	   var resultNumber = parseInt($("input#input-1").val());
	   var outputResults =rollDice;

	 outputResults.forEach(function(item){
	$("#outcome").append('<li>'+ item + '</li>');
	});
	event.preventDefault();
   });
  });

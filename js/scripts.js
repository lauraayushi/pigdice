//business-logic
//before the game starts
function(number) {
  this.number = number;
}

function(points) {
  this.points += points;
}
score = 0
//during the first turn of the pigdice game
var rollDice = Mathfloor(Math.random()*6 + 1);
if(rollDice === 1) {
   this.points =0;
}else{
   this.points += rollDice;   
}
return rollDice;
// during the next turns of the pigdice game
var secondTurn
var player = 100; //This is your limit of number you're logging in.
var guessAmount = 10; //Number of time you are to make a guess.
var count = 10; //This will display number of chances left in the game for the player.
var magical = Math.floor(Math.random() *player); //This is the mathematical part(Math.floor(Math.random() with *player is not constant it can be substituded) that does the random selection for you in the background. That's the reason I give the property magical to it.
//Below are the necessary condition for a best out put.
while (Attempts != magical) { var Attempts = prompt("Choose any number from 1 to " + player);
    count -=1;
    // The player guess is lower than the random number, "Too Low"
    if (Attempts < magical) {document.write("Too Low");}
    //The player guess is  higher than the random number, "Too High" . 
    if (Attempts > magical) {document.write("Too High");}
    //This will display number of chances left in the game for the player.
    document.write("<p>" + count + " More attempt</p>");
    // Aplayer guess is the same as the random number, "You Win" and end the game.
    if (Attempts == magical){document.write("You Win");}
    // A player failures to guess the number in 10 chances, "You Lose" and end the game.
    if (count < 1) {document.write("You Lose");}

    if (count < 1) {document.write("<p> Answer " + magical + "</p>");
    break}
}
console.log("game complete")
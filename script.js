var player = 100; //This is your limit of number you're logging in.
var guessAmount = 10; //Number of time you can guess
var count = 10; //In relation to the previous one, this will move in deccending order as a comes to zero game end.
var magical = Math.floor(Math.random() *player); //This is the mathematical part(Math.floor(Math.random() with *player is not constant it can be substituded) that does the random selection for you in the background. That's the reason I give the property magical to it.
//Below are the necessary condition for a best out put.
while (Attempts != magical) { var Attempts = prompt("Choose any number from 1 to " + player);
    count -=1;

    if (Attempts < magical) {document.write("Too Low");}
    if (Attempts > magical) {document.write("Too High");}
    
    document.write("<p>" + count + " More attempt</p>");

    if (Attempts == magical){document.write("You Win");}
    if (count < 1) {document.write("You Lose");}

    if (count < 1) {document.write("<p> Answer " + magical + "</p>");
    break}
}
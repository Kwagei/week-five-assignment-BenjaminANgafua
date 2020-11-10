var btn_guide = document.getElementById("guide");
var btn_begin = document.getElementById("begin");
var btn_reset = document.getElementById("reset");
var btn_check = document.getElementById("check");

var main_div = document.getElementById("main-div");
var guide_div = document.getElementById("guide-div")

var guess_box = document.getElementById("guess-box");
var guesses = document.getElementById("guesses");
var high_or_low = document.getElementById("high-or-low");

var random_num = Math.floor(Math.random()*100) + 1;
var count_guess =1;

function guide(){guide_div.style.visibility = "visible";}

function begin(){main_div.style.visibility = "visible";

}
function checkGuess(){var your_guess = Number(guess_box.value);

    if (count_guess <=10){ if (your_guess < random_num){
        guesses.textContent += your_guess + " ";
        document.getElementById("chances").innerHTML = "<div> Chances-attempted " + count_guess + "</div>";
        high_or_low.textContent = "your guess is Low";
        high_or_low.classList.add("wrong");
        count_guess++;
        guess_box.value = "";
    }
else if(your_guess > random_num){
        guesses.textContent += your_guess + " ";
        high_or_low.textContent = "your guess is High";
        high_or_low.classList.add("wrong");
        count_guess++;
        guess_box.value = ""; /*blank input field*/
        }
       
        // if your guess is equal the random number value.
else{   guesses.textContent += your_guess + " "; /*record of your guess*/
        high_or_low.textContent = "You win!"; /*guess equal to the random-number number*/
        high_or_low.classList.add("success"); /*Applied class created from stylesheet to your guess*/
        gameOver(); /*end the as you are successful*/
    }
    }
    // Chances over and your guess is not equal to the random-number number.

    else{ guesses.textContent += your_guess + " ";
    high_or_low.textContent = "You Lose!";/*guess not equal to the random-number number and chances over*/
    high_or_low.classList.add("wrong");/*Applied class created from stylesheet to your guess*/
    gameOver();/*end the as you are lost*/
}
}
function gameOver(){
    btn_check.disabled = true;
    guess_box.disabled = true;
}
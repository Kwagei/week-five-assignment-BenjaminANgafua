var count_guess = 10;
var btn_guide = document.getElementById("guide");
var btn_begin = document.getElementsByClassName("begin-btn");
var btn_check = document.getElementById("check");

let container = document.getElementById("container")
var guide_div = document.getElementById("guide-div")

var guess_box = document.getElementById("guess-box");
var guesses = document.getElementById("guesses");
var high_or_low = document.getElementById("high-or-low");

var random_num = Math.floor(Math.random() * 99) + 1;

var btn_hide = document.getElementById("hide");


function checkGuess() {
    var your_guess = Number(guess_box.value);

    if (your_guess <= 100) {
        if (count_guess > 1) {
            count_guess--;

            if (your_guess < random_num) {

                guesses.textContent += your_guess + ", ";
                document.getElementById("chances").innerHTML = "<div> Chances-remain " + count_guess + "</div>";
                high_or_low.textContent = "your guess is Low";
                high_or_low.classList.add("wrong");
                guess_box.value = "";
            } else if (your_guess > random_num) {
                guesses.textContent += your_guess + ", ";
                high_or_low.textContent = "your guess is High";
                document.getElementById("chances").innerHTML = "<div> Chances-remain " + count_guess + "</div>";
                high_or_low.classList.add("wrong");
                guess_box.value = ""; /*blank input field*/
            }

            // if your guess is equal the random number value.
            else {
                guesses.textContent += your_guess + ", "; /*record of your guess*/
                high_or_low.textContent = "You win!"; /*guess equal to the random-number number*/
                high_or_low.classList.add("success"); /*Applied class created from stylesheet to your guess*/
                guess_box.value = ""; /*blank input field*/
                gameOver(); /*end the as you succeed*/
            }
        }
        // Chances over and your guess is not equal to the random-number number.
        else {
            guesses.textContent += your_guess + " ";
            high_or_low.textContent = "You Lose!"; /*guess not equal to the random-number number and chances over*/
            high_or_low.classList.add("wrong"); /*Applied class created from stylesheet to your guess*/
            guess_box.value = ""; /*blank input field*/
            gameOver(); /*end the as you lost*/
        }
    } else {
        alert("Sorry out of range")
        window.location.reload()
    }
}

function hide() { guide_div.style.display = "none"; }

function guide() {
    guide_div.style.display = "block";

}

function hint() {
    let hint = document.getElementById("hint");
    if (random_num % 2 === 0) {
        hint.innerText += " the answer is an even number"
    } else {
        hint.innerText += " the answer is an odd number"
    }
    console.log("The answer in console", random_num)
}

function begin() {
    container.style.display = "flex";
    guide_div.style.display = "none"
}
//End game
function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true;
    document.getElementById("answer").innerHTML =
        "<div> The number is " + random_num + "</div>";
}
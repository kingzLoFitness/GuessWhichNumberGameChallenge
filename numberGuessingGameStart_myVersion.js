/*
This challenge is from:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash


Imagine your boss giving you a following brief for creating this game:

Create a simple guess the number type game.  It should choos a random number between 1 and 100, then challenge the player to guess the number in 10 turns.  After each turn the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high.  It should also tell the player what numbers they previously guessed.  The game will end once the player guesses correctly, or once they run out of turns.  When the game ends, the player should be given an option to start playing again.

Broken down into actionable tasks pseudocode:

- 100% Choose a random number between 1 and 100
- 80% there will be 10 turns  // record the turn number the player is on.  start at 1


- 20% each turn state whether right or wrong  // provide the player with a away to guess what the number is
- 0% if wrong, state too low or too high


- 0% show numbers (record it somewhere) the player previously guessed // Check whether it is the correct number

See number 6 online

- 50% the game ends once the player guesses correctly or once they run out of turns

- 80% when game ends player should have option to start playing again

*/

var userChoice;


// After a creating the for and first if else within the for statement, I decided to create the prompt user as a function
var promptUser = function() {
	userChoice = prompt("Choose a random number between 1 and 100");
}



userChoice = prompt("Choose a random number between 1 and 100");



// go to next turn out of 10
// thoughts of 10 turns
var numOfChances;

for (numOfChances = 10; numOfChances > 0; numOfChances--) {  // I kept getting wrong answer until I put this for loop in reverse.  I actually kept it in reverse after deciding to do the count down of how many wrong as the output of how much remaining.  Now I'm realizing the prompt disapears after the first enter
	// doing without the for loop for a minute
	if (userChoice == 39) {  // this is good for double equal, why not triple equal?
		/*
		- 20% each turn state whether right or wrong  // provide the player with a away to guess what the number is
		- 60% if wrong, state too low or too high
		*/
		
		var tryAgain = prompt("Lucky guess, the answer is " + userChoice + ".  Would you like to try again?");

		if (tryAgain == "yes") {
			promptUser(); 
		} else {
			alert("I see you've ended this game.  Thanks for playing.");
			break;
		}	// end of if/else  yes/no statement. There are times when there are too many closing brackets

	} else {

		var wrongAns = function() {
			return ", please try again.  You have " + numOfChances + " more chance(s).";
		}  // this was actually below the bottom if else statement and I moved it to the top as a function extension to the two alerts of too high too low

		if (userChoice < 39) {
			alert("Your answer " + userChoice + " is too low" + wrongAns());
		} else {
			alert("Your answer " + userChoice + " is too high" + wrongAns());
		}

		

		if (numOfChances == 1) {
			alert("Oh no, you have one more chance remaining.");
		}
	promptUser(); 
	}	// end of larger if/else
}	// end of for statement

/*
Additional notes: 
- I replaced the alerts for the console.log so it would not loop so much at current state: 20170402_1811


*/

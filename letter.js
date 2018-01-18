//Consructor Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
var randomWord = require('./word.js');

var wordToGuess = randomWord.goalWord.word;
console.log(wordToGuess);
// //stringify the randomly selected word
function toString (word){
	this.word = word;
	//creates array for letters guessed...push answers into array
	this.lettersGuessed = [];
	//do all of the letters in the guessed array equal the letters in the word? default 'false'
	this.wordGuessed = false;
	//turn word into an array
	this.wordArray = this.word.split('');
	//create method: for loop, if inquirer answer is equal to wordArray[i], console.log inquirer answer / else console.log '_' 
	}

var currentWord = new toString(wordToGuess);
// //print to test
console.log(currentWord.wordArray);

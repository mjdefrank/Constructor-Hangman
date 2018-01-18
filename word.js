//Word: Constructor Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
//Create a wordbank
var wordbank = ['Friday the Thirteenth', 'Halloween', 'Candyman', 'Night of the Living Dead', 'A Nightmare on Elm Street', 'Cabin in the Woods', 'Hostel', 'Scream', 'Dracula', 'The Blair Witch Project', 'Let the Right One In', 'An American Werewolf in London', 'Dawn of the Dead', 'The Ring', 'The Fly', 'Texas Chainsaw Massacre', 'Poltergeist', 'The Thing', 'Bride of Frankenstein', 'The Shining', 'Silence of the Lambs', 'Alien', 'Jaws', 'Psycho', 'The Exorcist'];
//return a random word from wordbank
var randomWord = function() {
	return wordbank[Math.floor(Math.random() * wordbank.length)]};
//call function to receive random word
var keyWord = randomWord();
//create a constructor that will create an object to represent the random word. 
function hangWord(word){
	//sets word property equal to the stringified, randomly selected word
	this.word = word;
	//creates array for letters guessed...push answers into array
	this.lettersGuessed = [];
	//do all of the letters in the guessed array equal the letters in the word? default 'false'
	this.wordGuessed = false;		
}
//use constructor to set 
var goalWord = new hangWord(keyWord);

module.exports.goalWord = goalWord;
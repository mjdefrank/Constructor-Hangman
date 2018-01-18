var inquirer = require('inquirer');
var gamescript = require('./game.js');
var word = require('./word.js'); //here or game.js?

var hangmanGame = gamescript.hangmanGame;

var guessesRemaining = 7;


//Prompt user to begin game
var confirmGame = [{
				name: 'playGame',
				type: 'confirm',
				message: 'Would you like to play a game?',
			}];
var beginGame = function()
	{ 
		inquirer.prompt(confirmGame).then(function(answer) {
				if (answer.playGame) {hangmanGame();}
				else {console.log('Goodbye, then.')};
			})
	}; 

beginGame();
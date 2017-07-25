initApp();

function initApp () {
	let startGame = confirm('Do you want to start game?');

	if (startGame) {
		let i = 1,
			randomNum = getRandomArbitrary(0,5);
			numResult = getNumResult(),
			numberTry = 1;

		while (numResult !== randomNum && numResult !== null && i < 3) {
			numResult = parseInt(prompt('Write your number'));
			i++;			
		}
		alertMsgs(numResult, randomNum, i);	
		

	} else {
		console.log("You didn't win million, but you could");
	}
}

function getNumResult () {
	let numResult;

	numResult = prompt('Write your number?');

	if ( numResult !== null ) {
		return parseInt(numResult);
	} else {
		return null;
	}
}

function alertMsgs(numResult, randomNum, i) {
	if ( numResult === randomNum ) {
		let winPrise;
		if ( i === 1 ) {
			winPrise = 10;
		} else if ( i === 2 ) {
			winPrise = 5;
		} else {
			winPrise = 2;
		}

		alert(`You won ${winPrise} $`)

		alertContinueGame(winPrise);
				
	} else {
		alert("You won 0 $");
		alertPlayAgain();			
	}
}

function alertPlayAgain () {
	let playAgain = confirm('Do you want to play again?');
		if (playAgain) {
			initApp();
		}
}

function alertContinueGame (winPrise) {
	let continueGame = confirm('Do you want to continue the game?');

	if (!continueGame) {
		alert(`You won ${winPrise} $`)
	}
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


let lastNumInInterval = 5,
	winPrise = 0;

let numPrise = {
	1Try: 10,
	2Try: 5,
	3Try: 2
}

initApp(false);

function initApp (isContinue) {
	let startGame = confirm('Do you want to start game?');

	if (startGame) {
		setAttempts(isContinue);

	} else {
		console.log("You didn't win million, but you could");
	}
}

function setAttempts (isContinue) {
	let i = 1,
		numResult = getNumResult();
	

	if ( isContinue ) {
		lastNumInInterval = lastNumInInterval * 2;
	}

	let randomNum = getRandomArbitrary(0, lastNumInInterval);

	while (numResult !== randomNum && numResult !== null && i < 3) {
		numResult = parseInt(prompt('Write your number'));
		i++;			
	}

	alertPrise(numResult, randomNum, i, isContinue);	
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

function alertPrise(numResult, randomNum, i, isContinue) {
	let prevPrise;
	if ( numResult === randomNum ) {
		if ( i === 1 ) {			
			winPrise = winPrise + 10;
			if (isContinue) {
				prevPrise = winPrise;
				winPrise = winPrise * 3 + prevPrise;
			}			
		} else if ( i === 2 ) {
			winPrise = winPrise + 5;
			if (isContinue) {
				prevPrise = winPrise;
				winPrise = winPrise * 3 + prevPrise;
			}
		} else {
			winPrise = winPrise + 2;
			if (isContinue) {
				prevPrise = winPrise;
				winPrise = winPrise * 3 + prevPrise;
			}
		}

		alert(`You won ${winPrise} $`)

		alertContinueGame();
				
	} else {
		alert(`You won ${winPrise} $`);
		alertPlayAgain();			
	}
}

function alertPlayAgain () {
	let playAgain = confirm('Do you want to play again?');
		if (playAgain) {
			initApp(false);
		}
}

function alertContinueGame () {
	let continueGame = confirm('Do you want to continue the game?');

	if (continueGame) {
		initApp(true);
	} else {
		alert(`You won ${winPrise} $`);
	}
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


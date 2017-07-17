initApp();

function initApp () {
	var startGame = confirm('Do you want to start game?'),
		randomNum,
		numResult,
		i = 1;

	if (startGame) {
		randomNum = parseInt(getRandomArbitrary(0,5));
		numResult = (prompt('Write your number?') !== null) ? parseInt(prompt('Write your number?')) : null;
		debugger;

		while (numResult !== randomNum && numResult !== null && i < 3) {
			numResult = parseInt(prompt('Write your number'));
			i++;
		}

		alertMsgs(numResult, randomNum);
		

	} else {
		console.log("You didn't win million, but you could");
	}
}

function alertMsgs(numResult, randomNum) {
	var playAgain;

	if ( numResult === randomNum ) {
			if ( i === 1 ) {
				alert('You won 10$');
			} else if ( i === 2 ) {
				alert('You won 5$');
			} else {
				alert('You won 2$');
			}		
		} else {
			alert("You won 0$");
			playAgain = confirm('Do you want to play again?');
			if (playAgain) {
				initApp();
			}
		}
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


initApp();

function initApp () {
	var startGame = confirm('Do you want to start game?'),
		randomNum,
		numResult,
		i = 1;

	if (startGame) {
		randomNum = parseInt(getRandomArbitrary(0,5));
		numResult = parseInt(prompt('Write your number'));
		debugger;

		while (numResult !== randomNum && i < 3) {
			numResult = parseInt(prompt('Write your number'));
			i++;
		}

		if ( numResult === randomNum ) {
			if ( i === 1 ) {
				alert('You won 10$');
			} else if ( i === 2 ) {
				alert('You won 5$');
			} else {
				alert('You won 2$');
			}
		} else {
			alert("You didn't win!");
		}
		

	} else {
		console.log("You didn't win!");
	}
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


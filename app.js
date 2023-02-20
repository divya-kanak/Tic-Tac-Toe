const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach(square => {
	square.addEventListener('click', handleClick);
});

function handleClick(event) {
	const square = event.target;
	if (square.innerText !== '') {
		return;
	}
	square.innerText = currentPlayer;
	checkWin();
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	winConditions.forEach(condition => {
		if (
			squares[condition[0]].innerText !== '' &&
			squares[condition[0]].innerText === squares[condition[1]].innerText &&
			squares[condition[1]].innerText === squares[condition[2]].innerText
		) {
			alert(`${currentPlayer} wins!`);
			resetBoard();
		}
	});
}

function resetBoard() {
	squares.forEach(square => square.innerText = '');
	currentPlayer = 'X';
}

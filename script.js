let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(cellIndex) {
  if (!board[cellIndex]) {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + " wins!");
      resetBoard();
    } else if (checkDraw()) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winConditions.some(condition =>
    condition.every(index => board[index] === currentPlayer)
  );
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}

const cells = Array.from(document.querySelectorAll('.cell'));
const resultPopup = document.getElementById('result-popup');
const resultText = document.getElementById('result-text');
let currentPlayer = 'X';
let board = Array(9).fill(null);

function makeMove(index) {
    if (!board[index] && !checkWinner()) {
        board[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            showResult(`${currentPlayer} Wins!`);
        } else if (board.every(cell => cell)) {
            showResult('It\'s a Draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function showResult(message) {
    resultText.textContent = message;
    resultPopup.style.display = 'block';
}

function newGame() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    resultPopup.style.display = 'none';
    currentPlayer = 'X';
}

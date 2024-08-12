const gridCells = document.querySelectorAll('.cell');
const displayText = document.querySelector('.display-text');
let [playerX, playerO] = ['X', 'O']
let currentPlayer = 'X'


const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


function checkWin(num) {
  let winner;
  
  for (const combo of winningCombo) {
    let [a, b, c] = combo;

    // check player X
    if ((num[a].textContent === playerX) && ((num[b].textContent === num[a].textContent) && num[c].textContent === num[a].textContent)) {
      winner = playerX;
      endGame();
      return;

    // check player O
    } else if ((num[a].textContent === playerO) && ((num[b].textContent === num[a].textContent) && num[c].textContent === num[a].textContent)) {
      winner = playerO;
      endGame();
      return;
    }
  }

  return winner;
}



gridCells.forEach((value, index, num) => {

  value.addEventListener('click', () => {
   

    checkWin(num);
    if (value.textContent === '') {
      value.textContent = currentPlayer;
    } else if (value.textContent !== '') {
      return;
    }

    if (currentPlayer === playerO) {
      currentPlayer = playerX;
      
    } else {
      currentPlayer = playerO;
    }
  })
})
const gridCells = document.querySelectorAll('.cell');
const displayText = document.querySelector('.display-text');
let [playerX, playerO] = ['X', 'O']
let currentPlayer = 'X'








// function checkWin(num) {
//   // Check Player X
//   // Check row

//   if ((num[0].textContent === 'x' && num[1].textContent === 'x') && num[2].textContent === 'x') {
//     winner = 'Player X';
//     endGame();

//   } else if ((num[3].textContent === 'x' && num[4].textContent === 'x') && num[5].textContent === 'x') {
//     winner = 'Player X';
//     endGame();

//   } else if ((num[6].textContent === 'x' && num[7].textContent === 'x') && num[8].textContent === 'x') {
//     winner = 'Player X';
//     endGame();

//     // check column

//   } else if ((num[0].textContent === 'x' && num[3].textContent === 'x') && num[6].textContent === 'x') {
//     winner = 'Player X'; 
//     endGame();

//   } else if ((num[1].textContent === 'x' && num[4].textContent === 'x') && num[7].textContent === 'x') {
//     winner = 'Player X';
//     endGame();

//   } else if ((num[2].textContent === 'x' && num[5].textContent === 'x') && num[8].textContent === 'x') {
//     winner = 'Player X';
//     endGame();

//     // check diagonals

//   } else if ((num[0].textContent === 'x' && num[4].textContent === 'x') && num[8].textContent === 'x') {
//     winner = 'Player X';
//     endGame();

//   } else if ((num[2].textContent === 'x' && num[4].textContent === 'x') && num[6].textContent === 'x') {
//     winner = 'Player X';
//     endGame();
//   } 

//   // Check Player O
//    // Check row

//    if ((num[0].textContent === 'o' && num[1].textContent === 'o') && num[2].textContent === 'o') {
//     winner = 'Player O';
//     endGame();

//   } else if ((num[3].textContent === 'o' && num[4].textContent === 'o') && num[5].textContent === 'o') {
//     winner = 'Player O';
//     endGame();

//   } else if ((num[6].textContent === 'o' && num[7].textContent === 'o') && num[8].textContent === 'o') {
//     winner = 'Player O';
//     endGame();

//     // check column

//   } else if ((num[0].textContent === 'o' && num[3].textContent === 'o') && num[6].textContent === 'o') {
//     winner = 'Player O'; 
//     endGame();

//   } else if ((num[1].textContent === 'o' && num[4].textContent === 'o') && num[7].textContent === 'o') {
//     winner = 'Player O';
//     endGame();

//   } else if ((num[2].textContent === 'o' && num[5].textContent === 'o') && num[8].textContent === 'o') {
//     winner = 'Player O';
//     endGame();

//     // check diagonals

//   } else if ((num[0].textContent === 'o' && num[4].textContent === 'o') && num[8].textContent === 'o') {
//     winner = 'Player O';
//     endGame();

//   } else if ((num[2].textContent === 'o' && num[4].textContent === 'o') && num[6].textContent === 'o') {
//     winner = 'Player O';
//     endGame();
//   }

//   return winner;
// }

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




function endGame() {
  document.body.innerHTML = `
    <h1 class="game-title">Tic Tac Toe Game</h1>
    <div class="end-game-box">
     <p class="end-game">Game Over ${winner} wins.
        <br>  Refresh to rematch 
      </p>
    </div>
   `; 
};

function checkDraw() {
  document.body.innerHTML = `
    <div class="end-game-box">
     <p class="end-game">Game Over It's a tie.
        <br>  Refresh to rematch 
      </p>
    </div>
   `;
};


gridCells.forEach((value, i, num) => {

  
  // I use the timer to continually run the checkWin() function and end the game if there is a winner. 
  // I know it's wrong..but I'm a noob and it's the best I can do for now
  
  // const checkingGame = setInterval(() => {
  //   console.log('hi')
  //   checkWin(num);
  
  //   if (checkWin(num) !== undefined) {
  //     console.log('hell')
  //     clearInterval(checkingGame);
  //   }
  // }, 1000)

  // Setting a fail safe incase there is no response from a player after 10mins 

//  if (winner === undefined) {
//   setTimeout(() => {
//     checkDraw()
//     clearInterval(checkingGame);
//   }, 100000)
//  }
 

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
const gridCells = document.querySelectorAll('.cell');
const displayText = document.querySelector('.display-text');
let text = 'x';
let winner;

gridCells.forEach((value, i, num) => {
  // I use the timer to continually run the checkWin() function and end the game if there is a winner. 
  // I know it's wrong..but I'm a noob and it's the best I can do
  
  const checkingGame = setInterval(() => {
    console.log('hi')
    checkWin(num);
  
    if (checkWin(num) !== undefined) {
      console.log('hell')
      clearInterval(checkingGame);
    }
  }, 1000)

  // Setting a fail safe incase there is no response from a player after 10mins 

 if (winner === undefined) {
  setTimeout(() => {
    checkDraw()
    clearInterval(checkingGame);
  }, 100000)
 }
 

  value.addEventListener('click', () => {
   

    // checkWin(num);
    if (value.textContent === '') {
      value.textContent = text;

      if (text === 'x') {
        text = 'o';
        displayText.textContent = 'Player O\'s turn'
      } else if (text === 'o') {
        text = 'x';
         displayText.textContent = 'Player X\'s turn'
      }
    } else if (value.textContent !== '') {
          checkDraw()
    }
  })
})





function checkWin(num) {
  // Check Player X
  // Check row

  if ((num[0].textContent === 'x' && num[1].textContent === 'x') && num[2].textContent === 'x') {
    winner = 'Player X';
    endGame();

  } else if ((num[3].textContent === 'x' && num[4].textContent === 'x') && num[5].textContent === 'x') {
    winner = 'Player X';
    endGame();

  } else if ((num[6].textContent === 'x' && num[7].textContent === 'x') && num[8].textContent === 'x') {
    winner = 'Player X';
    endGame();

    // check column

  } else if ((num[0].textContent === 'x' && num[3].textContent === 'x') && num[6].textContent === 'x') {
    winner = 'Player X'; 
    endGame();

  } else if ((num[1].textContent === 'x' && num[4].textContent === 'x') && num[7].textContent === 'x') {
    winner = 'Player X';
    endGame();

  } else if ((num[2].textContent === 'x' && num[5].textContent === 'x') && num[8].textContent === 'x') {
    winner = 'Player X';
    endGame();

    // check diagonals

  } else if ((num[0].textContent === 'x' && num[4].textContent === 'x') && num[8].textContent === 'x') {
    winner = 'Player X';
    endGame();

  } else if ((num[2].textContent === 'x' && num[4].textContent === 'x') && num[6].textContent === 'x') {
    winner = 'Player X';
    endGame();
  } 

  // Check Player O
   // Check row

   if ((num[0].textContent === 'o' && num[1].textContent === 'o') && num[2].textContent === 'o') {
    winner = 'Player O';
    endGame();

  } else if ((num[3].textContent === 'o' && num[4].textContent === 'o') && num[5].textContent === 'o') {
    winner = 'Player O';
    endGame();

  } else if ((num[6].textContent === 'o' && num[7].textContent === 'o') && num[8].textContent === 'o') {
    winner = 'Player O';
    endGame();

    // check column

  } else if ((num[0].textContent === 'o' && num[3].textContent === 'o') && num[6].textContent === 'o') {
    winner = 'Player O'; 
    endGame();

  } else if ((num[1].textContent === 'o' && num[4].textContent === 'o') && num[7].textContent === 'o') {
    winner = 'Player O';
    endGame();

  } else if ((num[2].textContent === 'o' && num[5].textContent === 'o') && num[8].textContent === 'o') {
    winner = 'Player O';
    endGame();

    // check diagonals

  } else if ((num[0].textContent === 'o' && num[4].textContent === 'o') && num[8].textContent === 'o') {
    winner = 'Player O';
    endGame();

  } else if ((num[2].textContent === 'o' && num[4].textContent === 'o') && num[6].textContent === 'o') {
    winner = 'Player O';
    endGame();
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
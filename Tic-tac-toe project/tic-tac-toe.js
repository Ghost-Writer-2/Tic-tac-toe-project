const gridCells = document.querySelectorAll('.cell');
let text = 'x';
let winner;

gridCells.forEach((value, i, num) => {
  value.addEventListener('click', () => {
    checkWin(num);
    if (value.textContent === '') {
      value.textContent = text;

      if (text === 'x') {
        text = 'o';
      } else if (text === 'o') {
        text = 'x';
      }
    } else if (value.textContent !== '') {
      document.body.innerHTML = `
    <div class="end-game-box">
     <p class="end-game">Game Over It's a tie.
        <br>  Refresh to rematch 
      </p>
    </div>
   `;
    }

    console.log(winner);
  })
})

function checkWin(num) {
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

  // } else {
  //   document.body.innerHTML = `
  //   <div class="end-game-box">
  //    <p class="end-game">Game Over It's a tie.
  //       <br>  Refresh to rematch 
  //     </p>
  //   </div>
  //  `
  }

  return winner;
}

function endGame() {
  document.body.innerHTML = `
    <div class="end-game-box">
     <p class="end-game">Game Over ${winner} wins.
        <br>  Refresh to rematch 
      </p>
    </div>
   `; 
};
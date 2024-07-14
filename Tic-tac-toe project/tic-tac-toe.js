// Going to research

const cell = document.querySelectorAll('.cell')
let player = 'O';

cell.forEach((value, index) => {
  value.addEventListener('click', (event) => {
      checkPlayer(value)
  })
})

function checkPlayer(value) {
  if (player === 'X') {
    player = 'O'
  } else if (player === 'O') {
    player = 'X';
    console.log(player)
  };

 
  if (value.innerHTML === player) {
    null;
  } else {
    value.innerHTML = player;
  };

}
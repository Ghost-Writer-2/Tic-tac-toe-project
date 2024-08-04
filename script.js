const gridCells = Array.from(document.querySelectorAll('.cell'));
const displayText = document.querySelector('.display-text');
let text = 'x';
let winner;

console.log(gridCells[0].innerH);



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


gridCells.forEach((value, i, num) => {
 
})
  


function checkWin(i) {
  let [a, b, c] = winningCombo[i];
  console.log(a, b, c)
}

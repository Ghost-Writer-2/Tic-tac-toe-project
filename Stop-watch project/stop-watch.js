const test = document.querySelector('.test');
const startButton = document.querySelector('.js-start-button')
const resetButton = document.querySelector('.js-stop-button')
const clock = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  miliseconds: 0
};


let hours = clock.hours
let minutes = clock.minutes
let seconds = clock.seconds
let miliseconds = clock.miliseconds


let start = false;
let isPaused = false;
let intervalId;

test.innerHTML = `0${hours} : 0${minutes} : 0${seconds} : 0${miliseconds}`;

startButton.addEventListener('click', () => {

  /*
  let hours = clock.hours
  let minutes = clock.minutes
  let seconds = clock.seconds
  let miliseconds = clock.miliseconds
  */

  if (start === false) {
    intervalId = setInterval(() => {

      if (miliseconds < 100) {
        miliseconds ++
      }
  
      if (miliseconds >= 100) {
        seconds++;
        miliseconds = 0;
      } 
      
      if (seconds >= 60) {
        minutes++
        seconds = 0;
      }
      
      if (minutes >= 60) {
        hours++
        minutes = 1
      }
      
      
      if (seconds >= 10 && minutes >= 10 && hours >= 10) {
        test.innerHTML = `${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
      
        } else if (seconds >= 10 && minutes < 10 && hours < 10) {
          test.innerHTML = `0${hours} : 0${minutes} : ${seconds} : ${miliseconds}`;
      
        } else if (seconds >= 10 && minutes >= 10 && hours < 10) {
          test.innerHTML = `0${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
      
        } else if (seconds >= 10 && minutes < 10 && hours >= 10) {
          test.innerHTML = `${hours} : 0${minutes} : ${seconds} : ${miliseconds}`;
      
        } else if (seconds < 10 && minutes >= 10 && hours >= 10) {
          test.innerHTML = `${hours} : ${minutes} : 0${seconds} : ${miliseconds}`;
      
        } else if(seconds < 10 && minutes < 10 && hours >= 10) {
          test.innerHTML = `${hours} : 0${minutes} : 0${seconds} : ${miliseconds}`;
      
        } else if (seconds < 10 && minutes >= 10 && hours < 10) {
          test.innerHTML = `0${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
      
        } else {
          test.innerHTML = `0${hours} : 0${minutes} : 0${seconds} : ${miliseconds}`;
        }
        
      }, 10);

   //startButton.innerHTML = 'Pause';
   start = true;
   return intervalId;

  } else if (start === true) {
    
    //startButton.innerHTML = 'Resume';

    //clearInterval(intervalId);

    test.innerHTML = `0${hours} : 0${minutes} : 0${seconds}`;
    //start = false;
    
  }

  return start;
})

resetButton.addEventListener('click', () => {
  if (start = true) {
    clearInterval(intervalId);
    test.innerHTML = `0${hours = 0} : 0${minutes = 0} : 0${seconds = 0} : 0${miliseconds = 0}`;

    start = false;
  }
 
  return start;
})





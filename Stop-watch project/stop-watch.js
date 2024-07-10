const test = document.querySelector('.test');
const clock = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

let hours = clock.hours
let minutes = clock.minutes
let seconds = clock.seconds


setInterval(() => {
  
 if (seconds < 60) {
  seconds++;
 } 
 
 if (seconds >= 60) {
  minutes++
  seconds = 1;
 }

 if (minutes >= 60) {
  hours++
  minutes = 1
 }



 if (seconds >= 10 && minutes < 10) {
  test.innerHTML = `0${hours} : 0${minutes} : ${seconds}`;
  console.log('passed')

 } else if (seconds >= 10 && minutes >= 10) {
  test.innerHTML = `0${hours} : ${minutes} : ${seconds}`;
  console.log('passed-33')

 } else if (seconds < 10 && minutes >= 10) {
  test.innerHTML = `${hours} : ${minutes} : 0${seconds}`;
 } else {
  test.innerHTML = `0${hours} : 0${minutes} : 0${seconds}`;
 }

 
  
}, 1000)
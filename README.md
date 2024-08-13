# Tic Tac Toe Project
  Welcome to my Tic Tac Toe JavaScript practice project. Feel free to look around 😄👀

# Table of Contents
  * [Project Overview](#project-overview)
  * [Technologies Used](#technology-used)
  * [Techniques Applied](#techniques-applied)
  * [Problems Encountered](#problems-encountered)
  * [Areas the Code can Be Improved](#areas-to-improve)
  * [Appeal for Tips](#my-appeal-for-tips-and-advices)
  * [Live Preview](#live-preview)

# Project Overview 
   This is just a normal tic tac toe game made by an amatuer for practice purposes. In this project I applied everything I have learned so far which are just beginner concepts of JavaScript. I know there are better ways to approach this project and I will continue updating the project as I learn more advanced concepts. I am also willing to learn from whatever advices and obdervations you may have for me regarding this project and my learning.

## Technologies Used 
  * HTML5
  * CSS3
  * JavaScript (Vanilla Js)

## Techniques Applied 
  In this project I attempted to create a tic tac toe game with vanilla js as a learning project using the following concepts
  - I used concepts like control statements `` if...else`` to check if cells are empty, to also  check if there is a winner or if there is none.
  - I used an ``array`` to store all the possible winning conditions of the game
  - I used a ``setInterval()`` and ``setTimeout()`` to contiue running the ``checkWin()`` function constantly as a solution to a problem I encountered. Although my solution to the problem is bad practice, at the moment there is no other way I can solve the problem on my own. 

## Problems Encountered
  When there is a winner, a cell has to be clicked for the winner to be announced which is bad. The same problem applies to the ``checkDraw()`` function i.e A draw can't be declared unless a cell is clicked. 

  The reason for this is the ``checkWin()`` and ``checkDraw()`` function is run with a click event listener in each grid cell. So unless a cell is clicked, the function won't run
  I am currently thinking of a solution. 

## Areas to Improve 
  - Replace the ``setInterval()`` and ``setTimeout()`` solution with a better solution
  - Add a better UI design for the game
  - Add more functionality like a restart button, score counter and a few more.

## My Appeal for Tips and Advices 
  I would really appreciate every tip offered on how to solve the problems I'm facing in the project. I will also appreciate tips on how I can write a more maintainable and clean code.

## Live Preview

 ### [Live Preview](https://ghost-writer-2.github.io/Tic-tac-toe-project/)


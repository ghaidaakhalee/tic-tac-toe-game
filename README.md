# Tic Tac Toc Game Project 
Tic Tac Toe is one of the most played games and it's meant for people who are obsessed with playing tic tac toe  and it the best time killer game and you can playing from any place just open the url of the game and go play.It requires two players to play the game, Player1 will be "X" and Player2 will be "O". It consisting of 3x3 grids containing 9 moves for both players to complete the game. Any player can win the game if he gets all the "X" or "O" in any possible position, such as first row, middle row, last row, first column, middle column, last column, left diagonal, and right diagonal
### Access To The [Game](https://pages.git.generalassemb.ly/ghaidaakhalil/tic-tac-toe/)
# wireframes/ Demo
### lucid.app [wireframes](https://lucid.app/lucidchart/d1e01082-f247-4cad-9872-7ffe5614f359/edit?page=0_0#)
<div align="center">
<img width="500" height=" 400" alt="wir1" src="https://media.git.generalassemb.ly/user/33227/files/6ee97200-455d-11eb-8d07-8844d2c40800"></div>
<div align="center">
  <img width="482" alt="tic1" src="https://media.git.generalassemb.ly/user/33227/files/a63c3b00-45be-11eb-8938-8f8cea64bebe"></div>
<div align="center">
<img width="482" alt="tic2" src="https://media.git.generalassemb.ly/user/33227/files/e3083200-45be-11eb-8d70-28f5a7f9c35f">
 </div>
 <div align="center">
<img width="489" alt="tic3" src="https://media.git.generalassemb.ly/user/33227/files/09c66880-45bf-11eb-963a-e7b7f48a1ba4">
 </div>


# User Stories:
- As a user, I want play new game without refreshing the page.
- As a user, I want start the game  with X then O.
- As a user, I want to see a message who's turn it is next.
- As a user, I want to see a message who is the winner.
- As a user, I shouldn't be able to click to any Square that clicked.
- As a user, I should not be able to continue playing once I win, lose, or tie.
#
# Technologies Used In The Project 
- HTML 
- CSS
- JAVASCRIPT
- jQuery library
# My Project Plan
- At the beginning, I started designing the structure of the game by using (lucid.app) wireframes to know how the game will be, then I divided each section to start work with.
- I started by created HTML file 
- After that I started to  designing web page by using CSS, and I had some problems with it at first but I searched for it through google and found the solution.
- After I finished from designing I started writing pecode for logic of the game.
- For the actual game, I started by how can the player click each square in the board, so I added event listener(click) on each square in the border to select the square the player wants.
- Then I thought how Players could start the game with an X then O, so I created an if statement for that
- Then I thought about how to add X or O to squares when I click on them, so I used (.append()) method to add it
- After testing all of this points I thought how the game can find the winner, so I created  function Inside it (if statement) for each row , column and cross it used to check if it have same symbol.
- And after that I thought how I can stop the game if finding the winner , so I created variable called (play) takes boolean values so if finding the winner the game will be stop(reassign play variable to takes false).
- And the last thing I added event listener on button (Again) to reload the page without refreshing the page
- Building a game from scratch was a new challenge for me, but it was a great experience and I hope to develop my skills further
# Describe how Find The Winner
i created function to compar between each row , column, and left , right diagonal. After that i called this function inside play Space to check it 
```

    if (checkWinner() != "" && checkWinner() !=-1){ 
        if(checkWinner()=="x"){
            playerName1.text(" Player X is won!!")
            $(".divName1").css("background-color","#F5B7B1")
           
        }
      else{
        playerName2.text(" Player O is won!!")
        $(".divName2").css("background-color","#48B9A5")
      }
      
      play = false 
      $("h1").text("WOOOW Who is Winner ")
      play = false 
      } 
```

# Future features Want Work On
- Add an option that allows the player to choose X or O
- Add a counter that counts the number of rounds
- Add an option to enter the name of the player
- Add an option to play with the computer






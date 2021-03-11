
const playerName1 = $("#playerName1")// this praagraph shows who is the winner
const playerName2 = $("#playerName2")// this praagraph shows who is the winner
let movePlayer1 =1 // creat variable 
let playSpace = $(".cell")// select the play space that the player move on
let play = true // variable for play continues or stop

// add event on play space to start play 
playSpace.on("click",function(){
    if(movePlayer1<=9){
    if($(this).text()== "" && play ){
        if(movePlayer1%2==1){ // add a condition to start playing with x   
             
        $(this).append("x");
        $("body").append("")
        $("h1").text("Let's Go Player O")  // meassage to turn between the players
        $(this).css({"text-align" :"center",
                    "background-color":"#F5B7B1",
                    "font-size":"70px"})
                         
                         
    }

    else {
        $("h1").text("Let's Go Player X ")// meassage to turn between the players
        $(this).append("o"); 
        $(this).css({"text-align":"center",
                    "font-size":"70px"})
                     
    }
    
    
    
    movePlayer1++
    if (checkWinner() != "" && checkWinner() !=-1){ //if statement for cheak text inside it
        if(checkWinner()=="x"){
            playerName1.text(" Player X is won!!")
            $(".divName1").css("background-color","#F5B7B1")
           
        }
      else{
        playerName2.text(" Player O is won!!")
        $(".divName2").css("background-color","#48B9A5")
      }
      
      play = false // when we find the winer stop the game
      $("h1").text("WOOOW Who is Winner ")
      
      } 
     
}
} 
else  {
    $("h1").text("Oh No!! Let's Go Again")
}   
    }
  
      
    

)

//-----------------------------------------
//creat function for check winner
function checkWinner(){
    
   
    console.log("check")
    //row
    if($("#cell1").text() === $("#cell2").text() && $("#cell2").text()=== $("#cell3").text()){  //compier between row and column to find the winner
        return $("#cell3").text()
        
    }
    
     if($("#cell4").text() === $("#cell5").text() && $("#cell5").text()=== $("#cell6").text()){
        return $("#cell6").text()
    }
    if($("#cell7").text() === $("#cell8").text() && $("#cell8").text()=== $("#cell9").text()){
        return $("#cell9").text()
    }
    //coulmn
     if($("#cell1").text() === $("#cell4").text() && $("#cell4").text()=== $("#cell7").text()){
        return $("#cell7").text()
    
    }
     if($("#cell2").text() === $("#cell5").text() && $("#cell5").text()=== $("#cell8").text()){
        return $("#cell8").text()
    
    }
    if($("#cell3").text() === $("#cell6").text() && $("#cell6").text()=== $("#cell9").text()){
        return $("#cell9").text()
    
    }
    //cross
    if($("#cell3").text() === $("#cell5").text() && $("#cell5").text()=== $("#cell7").text()){
        return $("#cell7").text()
    
    }
    else if($("#cell1").text() === $("#cell5").text() && $("#cell5").text()=== $("#cell9").text()){
        return $("#cell9").text()
    
    }

    return -1
}
//-------------------------------------------
const buttonreset =$(".buttonreset")//select button (Agine)
//creat event on button (Agine) to relode the page
buttonreset.on("click",function(){
   
    location.reload(true)
})
buttonreset.hover(function () {
    buttonreset.css("background-color"," #F5B7B1")
        
    }, function () {
        buttonreset.css("background-color"," rgb(221, 221, 221)")
    }
);



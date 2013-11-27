$(document).ready(function(){
   var key=Math.floor((Math.random()*100)+1); //creating key when the page loads. 
    $("#player_guess").focus();
    var guessNum;
   
    var your_try = [];
        
   
    $("#play").click(function(){
    guessNum= Math.floor($("#player_guess").val());
    $("#player_guess").empty();//clear inputfield after button click.
    $("#player_guess").val();
     $("#player_guess").focus();//cursor position ready in inoutfield.
    your_try.push(guessNum); //storing all guessed number in an array.
    console.log(key);
    
     if(key!==guessNum){

       
        confirm("No luck");


     }
     if(key==guessNum){
        confirm("You got it");
     }

    $("#your_guess").val(your_try); //Displaying all guessed numbers.
    
    
    });
});


    
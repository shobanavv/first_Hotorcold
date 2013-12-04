$(document).ready(function(){
   var key=Math.floor((Math.random()*100)+1); //creating key when the page loads. 
    $("#player_guess").focus();
    var guessNum;
    var your_try = [];
    your_try.lenght=0;
     var msg;
     var clicks=0;
    var difference= function(a,b) {
        return Math.abs(a-b)
        }

   
   var run_play = function(){
    guessNum= Math.floor($("#player_guess").val());
   
    $("#player_guess").val("");//clear inputfield after button click.
     $("#player_guess").focus();//cursor position ready in inoutfield.
     if (your_try.length > 10) {
        your_try.shift();
     }
    
    console.log("Answer is  "+key);
    
    clicks=clicks+1;
    
    
    var diff = difference(key,guessNum);
   
        console.log("Difference   "+ diff);
        
        if (diff>=1 && diff<=5) {
            msg = " Very close - Boiling";
            $("#message").css("background-color"," #ff0000");
        }
        else if (diff>=6 && diff<=10) { 
            msg = " Hot";
            $("#message").css("background-color"," #cc3333");
        }
       else if (diff>10 && diff<=20) {
        msg = "Getting Hotter";
        $("#message").css("background-color"," #ff6633");
       }
       else if (diff>20 && diff<=30) {
        msg = "warm";
        $("#message").css("background-color"," #ffff66");
       }
        else if (diff>30 && diff<=40) {
         msg= "Normal";
         $("#message").css("background-color"," #ccffff");
        }
        else if (diff>40 && diff<=50) {
            msg = "cold";
            $("#message").css("background-color"," #a7d3ff");
        }
        else {
            msg = "very cold";
            $("#message").css("background-color"," #0066ff");
        }

     
        if (key==guessNum) {
                msg= "Woo Hoo!!!! You got it. You took  "+ clicks + "  tries.";
                 $("#message").css("background-color"," #00ff00");
             }

        if (isNaN(guessNum) || guessNum ==" " || guessNum>100) {
             $("#comments").val("Enter a valid number between 1 and 100." );
              $("#message").css("background-color"," #ffffff");
        }
         else {
            your_try.push(guessNum); //storing all guessed number in an array.
          $("#comments").val(msg);
            $("#your_guess").val(your_try); //Displaying all guessed numbers.
        }
    };
        $("#play").click(run_play);
        $("#player_guess").keydown(function(enter_key){
            if (enter_key.keyCode === 13) {
                run_play();
            }
        });
    
});

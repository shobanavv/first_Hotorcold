$(document).ready(function() {

    var key; 
    var pre_diff;
    var clicks;
    var current_diff;
    var your_try = [];
    var msg;
    var play_again;
    var difference;
    var randomNumber;
    var run_play;
    
    play_again = function() {
        key = randomNumber(1, 100);
        your_try = [];
        pre_diff = null;
        current_diff = null;
        msg=" ";
        clicks = 0;
        $("#player_guess").val("");
        $("#player_guess").focus();
        $("#your_guess").val(your_try);
        $("#comments").val(msg);
        $("#beeker").css("background-color","#05f2ee");
        $("#message").css("background-color","#05f2ee");
    }

    //Finding difference between key with user guess.
    difference= function(a,b) {
        return Math.abs(a-b);
    }       

    //creating key when the page loads.
    randomNumber = function(from,to) {
        return Math.floor((Math.random()*(to-from)+from));  
    }

    //Main game calculations. 
    run_play = function(key) {
        
        guessNum= parseInt($("#player_guess").val(), 10);       //geting number from user.
        
        //checking for number between 1 and 100.
        if (isNaN(guessNum) || guessNum ==" " || guessNum > 100 || guessNum == 0) {
            $("#comments").val("Enter a valid number between 1 and 100." );
            $("#beeker").css("background-color","#05f2ee");
            $("#player_guess").val("");
            $("#player_guess").focus();
            return;
        } 

        your_try.push(guessNum); //storing all guessed number in an array.
        $("#your_guess").val(your_try); //Displaying guessed numbers into beeker.

        clicks = clicks + 1; //Counting all tries. To show player, in how many tries they found the number I thought.

        //User guessed it in first try?
         if (key == guessNum) {
                if(clicks==1) {      //if player find answer in first try. 
                    msg= "Woo Hoo!! You got it. You took only " + clicks + " try. Cool!!!";
                    $("#message").css("background-color", "#00FF00");
                } else {
                    msg= "Woo Hoo!!!! You got it. You took  " + clicks + "  tries.";
                    $("#message").css("background-color", "#00FF00");
                }
                $("#comments").val(msg);
            return;    
        }

            current_diff = difference(key, guessNum);      //comparing current number with key.  
            
            if (current_diff >= 1 && current_diff < 6) {
                msg = "Boiling";
                $("#message").css("background-color", "#ff0000");
            } else if (current_diff >= 6 && current_diff <= 10) { 
                msg = "Very Hot";
                $("#message").css("background-color", "#cc3333");
            } else if (current_diff > 10 && current_diff <= 20) {
                msg = "Hot";
                $("#message").css("background-color", "#ff6633");
            } else if (current_diff > 20 && current_diff <= 30) {
                msg = "Warm";
                $("#message").css("background-color", "#ffff66");
            } else if (current_diff > 30 && current_diff <= 40) {
                msg= "Cold";
                $("#message").css("background-color", "#ccffff");
            } else if (current_diff > 40 && current_diff<=50) {
                msg = "Very Cold";
                $("#message").css("background-color", "#a7d3ff");
            } else {
                msg = "Freezing";
                $("#message").css("background-color", "#0066ff");
            }

            if (pre_diff !== null ){
                if(current_diff < pre_diff) {
                    msg += "- You are coming towards key.";

                } else if (current_diff > pre_diff){
                    msg += "- You are going away."
                }
            }

            pre_diff = current_diff;
            if($("#full_body").width() <= 840 || $("#full_body").height() <= 420){
                if  (your_try.length > 2) {
                    your_try.shift();
                }
            }   else{  
                    //Displaying current 10 values in beeker. Just want to have current guesses.
                    if (your_try.length > 10) {
                    your_try.shift();
                    }
                }

        $("#player_guess").val("");                         //clear input field after drop button click or enter key.
        $("#player_guess").focus();                         //cursor position ready in inputfield.
        $("#comments").val(msg);
    };//run_play function ends here.


    // accepts user number when enter key pressed by calling run_play funtion.
    $("#player_guess").keydown(function(enter_key) {
            if (enter_key.keyCode === 13) {
                run_play(key);
            }
    });
   
   //accepts number when the Drop button clicked.
   $("#play").click(function() {
        run_play(key);
    });  

    // calling function after Start over button clicked.
   $("#start_over").click(function() {
        play_again();
    }); //calling function give up to give answer.

   $("#give_up").click(function(){
        $("#comments").val("Answer is " + key +".");
   });

   play_again();

});

$(document).ready(function() {

    var key = randomNumber(1,100);
    $("#player_guess").focus();
    var pre_diff=100;
    var clicks=0;
    var current_diff=0;
    var your_try = [];
    var msg;

//Finding difference between key with user guess.
var difference= function(a,b) {
        return Math.abs(a-b);
 }       

//creating key when the page loads.
function randomNumber(from,to) {
    return Math.floor((Math.random()*(to-from)+from));  
}

//Main game calculations. 
var run_play = function(key) {
    
    guessNum= parseInt($("#player_guess").val());       //geting number from user.
    $("#player_guess").val("");                         //clear input field after drop button click or enter key.
    $("#player_guess").focus();                         //cursor position ready in inputfield.

    //Displaying current 10 values in beeker. Just want to have current guesses.
    if (your_try.length > 10) {
        your_try.shift();
    }

    //checking for number between 1 and 100.
    if (isNaN(guessNum) || guessNum ==" " || guessNum>100||guessNum==0) {
        $("#comments").val("Enter a valid number between 1 and 100." );
        $("#beeker").css("background-color","#05f2ee");
        return;
    } 

    your_try.push(guessNum); //storing all guessed number in an array.
    $("#your_guess").val(your_try); //Displaying guessed numbers into beeker.

    
    clicks=clicks+1; //Counting all tries. To show player, in how many tries they found the number I thought.

    //User guessed it in first try?
     if (key==guessNum) {
            if(clicks==1) {      //if player find answer in first try. 
                msg= "Woo Hoo!! You got it. You took only "+ clicks + " try. Cool!!!";
                 $("#beeker").css("background-color"," #5EAD5E");

            } else {
                msg= "Woo Hoo!!!! You got it. You took  "+ clicks + "  tries.";
                 $("#beeker").css("background-color"," #48F50A");
                }

    } else {      
            current_diff = difference(key,guessNum);      //comparing current number with key.  
            console.log("Difference   "+ current_diff);

            if(current_diff<pre_diff || guessNum-key<0) {
                if(current_diff<5) {
                        
                    msg="Boiling";
                     $("#beeker").css("background-color"," #DE0404");
                
                } else if(current_diff<10) {
                        
                    msg="Hot";
                    $("#beeker").css("background-color"," #F53D0A");
                  
                    } else if(current_diff<20) {
                        
                        msg=" Getting Hotter";
                        $("#beeker").css("background-color"," #F5770A");
                    
                        } else if (current_diff<30) {
                         
                            msg="Warm.";
                             $("#beeker").css("background-color"," #E8E180");
                            
                            } else {
                            
                                msg="Normal.";
                                $("#beeker").css("background-color"," #F0E5A3");
                                
                                }
                
            } else if(current_diff<5) {
                    
                msg=" Answer is around the corner. You are moving away";
                $("#beeker").css("background-color","#C4F0A3");
                
                    } else if(current_diff<10) {
                                
                        msg="Cold. ";
                        $("#beeker").css("background-color"," #A3C0F0");
                            
                        } else if(current_diff<25) {
                                msg=" Colder"; 
                                $("#beeker").css("background-color"," #80ABE8"); 
                               
                            } else {

                                 msg="Freezing.";
                                 $("#beeker").css("background-color"," #80CAE8");
                                }
                
             pre_diff=current_diff;

    }//first try - else ends here.

    $("#comments").val(msg);

};//run_play function ends here.

//Start Over button click calls following function.
var play_again = function() {
        key = randomNumber(1,100);
        your_try = [];
        pre_diff=100;
        current_diff=0;
        msg=" ";
        clicks=0;
        $("#player_guess").focus();
        $("#your_guess").val(your_try);
        $("#comments").val(msg);
        $("#beeker").css("background-color","#05f2ee");
};
//Displays answer when give up button clicked.
var giveup = function() {
   
    $("#comments").val("Answer is " + key +".");
    
    };

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
    giveup();
   });
});

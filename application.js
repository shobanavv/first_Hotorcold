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
   
   
    $("#play").click(function(){
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
        }
        else if (diff>=6 && diff<=10) { 
            msg = " Getting Hotter";
        }
       else if (diff>10 && diff<=20) {
        msg = "Hot";
       }
       else if (diff>20 && diff<=30) {
        msg = "warm";
       }
        else if (diff>30 && diff<=40) {
         msg= "Normal";
        }
        else if (diff>40 && diff<=50) {
            msg = "cold";
        }
        else {
            msg = "very cold";
        }

     
if (key==guessNum) {
        msg= "Woo Hoo!!!! You got it. You took  "+ clicks + "  tries.";
     }

if (isNaN(guessNum) || guessNum ==" " || guessNum>100) {
     $("#comments").val("Enter a valid number between 1 and 100." );
}
 else {
    your_try.push(guessNum); //storing all guessed number in an array.
  $("#comments").val(msg);
    $("#your_guess").val(your_try); //Displaying all guessed numbers.
}
    
    });
    
});

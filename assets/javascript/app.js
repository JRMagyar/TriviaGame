window.onload = function(){
//assign global variables here
var intervalId;
let time = 30;
let count = 0;
let score = 0;
var playerAnswers = [];
var correctAnswers = ["A", "B", "A", "D", "C"];
let currentAnswer = " ";

//timer functions
function decrease(){
    time --
    $("#timer").text("Time Remaining: " + time + " seconds")

    if (time == 0){
        endGame();
    }
}
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrease, 1000);
}
function stop(){
    clearInterval(intervalId)
}

//arrays to hold questions and answers for each page
var question = ["In the game Overcooked, what fictional kingdom are your trying to protect?","Horizon Zero Dawn is an exclusive for which platform?","World of Warcraft was originally released in what year?","What was the best selling game in 2017?", "What was Nintendo's first home gaming system sold outside of Japan?"];
var optA = ["Onion Kingdom","Xbox One","2004","Farm Simulator","SNES"];
var optB = ["Yummy Kingdom","Playstation 4","2000","Destiny 2","Atari"];
var optC = ["Kitchen Kingdom","Nintendo Switch","1492", "Grand Theft Auto V", "NES"];
var optD = ["Basil Kingdom","Commodore 64","2010","Call of Duty: WWII","Color TV-Game"];

//defining functions to be used in gameplay

//used to move to next question
function nextQuestion(count){
    $(".answer").removeClass("selected");
    $("#question").empty();
    $(".answer").empty();
    $("#question").text(question[count]);
    $("#opt-A").text(optA[count]);
    $("#opt-B").text(optB[count]);
    $("#opt-C").text(optC[count]);
    $("#opt-D").text(optD[count]);
}
//for end game
function endGame(){
    $("#content").empty();
    a = "<h2> You Scored: </h2>";
    b = "<h2>" + score + "/5 </h2>";
    $("#content").append(a);
    $("#content").append(b);
}


//button on clicks
$("#start").on("click",function(){
    $("#start").css("display", "none");
    $("#next").css("display", "initial");
    $(".answer").css("display", "initial");
    nextQuestion(count);
    run();

})
$(".answer").on("click", function(){
    $(".answer").removeClass("selected")
    $(this).addClass("selected")
    currentAnswer = $(this).attr("value")
    
})

$("#next").on("click",function(){
    playerAnswers.push(currentAnswer);
    if(playerAnswers[count] == correctAnswers[count]){
        score++
    }
    count++
    console.log(score);
    //runs on game ended when reached by question ending
    if(count >= question.length){
        stop();
        endGame();
    }
   else{
       nextQuestion(count);
   }
})



}
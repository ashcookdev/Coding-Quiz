
var highScore = document.querySelector("#highscores");
var score = document.querySelector("#score")
var incorrectq = document.querySelector("#incorrect")
var clear = document.querySelector("#clear")


    var lastUser = JSON.parse(localStorage.getItem("player"));
console.log(lastUser);

document.getElementById("initial").innerHTML = JSON.parse(localStorage.getItem("newUser"));
document.getElementById("score").innerHTML = JSON.parse(localStorage.getItem("score"));
document.getElementById("incorrect").innerHTML = JSON.parse(localStorage.getItem("incorrect"));


clear.addEventListener("click" ,function(event) {
event.preventDefault();
event.stopPropagation();
    event.target.localStorage.clear();



})

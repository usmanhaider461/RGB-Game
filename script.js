var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    // add initial Colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners
    squares[i].addEventListener("click", function () {
        // grab click of clicked color
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
        changeColors(clickedColor);
        message.textContent = "Correct!"
    } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again"

    } 
      });  
}

function changeColors(color) {
    // loop through all squares
    // change color to match each color
    for (const square of squares) {
     square.style.backgroundColor = color;  
    }
  }

function pickColor(){
     random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(numberOfColors) {
    //
}
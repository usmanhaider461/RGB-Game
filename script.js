var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
    // generate all new Colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colors";
    message.textContent = "";


    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});


// easyBtn Event Listener
easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        // add initial Colors to squares
        if (colors[i])
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.display = "none";
    }
});

// hardBtn Event Listener

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        // add initial Colors to squares
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

for (var i = 0; i < squares.length; i++) {
    // add initial Colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners
    squares[i].addEventListener("click", function () {
        // grab click of clicked color
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            changeColors(clickedColor);
            resetButton.textContent = "Play Again!";
            h1.style.backgroundColor = clickedColor;
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

function pickColor() {
    random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(numberOfColors) {
    //make an array
    // add random colors to array
    // return that array
    var arr = [];
    // loop numberOfColors times
    for (var i = 0; i < numberOfColors; i++) {
        // get random colors and push into array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
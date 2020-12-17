var totalColors = 6;
var colors = generateRandomColors(totalColors);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.getElementsByClassName("modeBtn");
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
    // generate all new Colors
    totalColors = 6;
    reset();
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        (this.textContent === "Easy") ? totalColors = 3: totalColors = 6;
        reset();
    })
}
// easyBtn Event Listener
// easyBtn.addEventListener("click", function () {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     message.textContent = "";
//     colors = generateRandomColors(3);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         // add initial Colors to squares
//         if (colors[i])
//             squares[i].style.backgroundColor = colors[i];
//         else
//             squares[i].style.display = "none";
//     }
// });

// hardBtn Event Listener

// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     colors = generateRandomColors(6);
//     pickedColor = pickColor();
//     message.textContent = "";
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         // add initial Colors to squares
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

for (var i = 0; i < squares.length; i++) {
    // add initial Colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners
    squares[i].addEventListener("click", function () {
        // grab click of clicked color
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
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

function generateRandomColors(totalColors) {
    //make totalColors an array
    // add random colors to array
    // return that array
    // loop totalColors = 6; times
    var arr = [];
    for (var i = 0; i < totalColors; i++) {
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

function reset() {
    colors = generateRandomColors(totalColors);
    // pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    message.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        // add initial Colors to squares
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else
            squares[i].style.display = "none";
    }
}
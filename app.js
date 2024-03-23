// Show user the range selector value and draw grid
const value = document.querySelector("#value");
const userInput = document.querySelector("#user_input");
const gridContainer = document.querySelector(".gridContainer");
const colorSelector = document.querySelector("#colorSelector");
const rainbowButton = document.querySelector("#rainbowButton");
const resetButton = document.querySelector("#resetButton");
const eraserButton = document.querySelector("#eraserButton");
const currentStatus = document.querySelector("#status")


let isRainbowMode = false;
let gridSize = userInput.value;
value.textContent = `${gridSize} x ${gridSize}`;

function drawGrid(size) {
    gridContainer.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            let cellWidth = 800 / size;
            cell.style.width = `${cellWidth}px`;
            cell.style.height = `${cellWidth}px`;
            cell.classList.add("cell");
            cell.addEventListener("mousedown", () => {
                if (!eraserButton.classList.contains("active")) {
                    cell.style.backgroundColor = colorSelector.value;
                } else {
                    cell.style.backgroundColor = 'antiquewhite';
                }
            });
            gridContainer.appendChild(cell);
        }
    }
}

userInput.addEventListener("input", (event) => {
    gridSize = event.target.value;
    value.textContent = `${gridSize} x ${gridSize}`;
    drawGrid(gridSize);
});

rainbowButton.addEventListener("click", () => {
    isRainbowMode = !isRainbowMode;
    rainbowButton.textContent = isRainbowMode ? "Stop Rainbow" : "Rainbow Color";
    if (isRainbowMode) {
        console.log("rainbow mode on");
        currentStatus.textContent = "Current Status: Rainbow Drawing"
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("mouseover", rainbowMouseOver);
        });
    } else {
        console.log("rainbow mode off");
        currentStatus.textContent = "Current Status: Drawing"
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.removeEventListener("mouseover", rainbowMouseOver);
        });
    }
});

function rainbowMouseOver() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
}

resetButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "antiquewhite";
    });
});

eraserButton.addEventListener("click", () => {
    eraserButton.classList.toggle("active");
    if (eraserButton.classList.contains("active")) {
        eraserButton.textContent = "Draw"
        currentStatus.textContent = "Current Status: Erasing"
        
    } else {
        eraserButton.textContent = "Eraser";
        currentStatus.textContent = "Current Status: Drawing"
    }
    
});





drawGrid(gridSize); 
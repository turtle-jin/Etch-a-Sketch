// Show user the range selector value and draw grid
const value = document.querySelector("#value");
const userInput = document.querySelector("#user_input");
const gridContainer = document.querySelector(".gridContainer");


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
            gridContainer.appendChild(cell);
        }
    }
}

userInput.addEventListener("input", (event) => {
    gridSize = event.target.value;
    value.textContent = `${gridSize} x ${gridSize}`;
    drawGrid(gridSize);
});


drawGrid(gridSize); 
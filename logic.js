const container = document.querySelector(".container");
const label = document.querySelector("label");
const range = document.querySelector("#range");
let gridSize = parseInt(range.value);

// Initialize the grid
createDivs(gridSize);

// Update the grid size when the range input changes
range.addEventListener("input", function () {
    gridSize = parseInt(range.value);
    label.textContent = gridSize;
    removeAllGrids();
    createDivs(gridSize);
});

// Remove all grids
function removeAllGrids() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Create the grid
function createDivs(num) {
    for (let row = 0; row < num; row++) {
        for (let col = 0; col < num; col++) {
            let div = document.createElement("div");
            div.classList.add("grids");
            div.style.width = `calc(100% / ${num})`;
            container.appendChild(div);
        }
    }
}

// Set up hover effect to draw in black
container.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grids")) {
        e.target.style.backgroundColor = "black";
    }
});

// Reset the grid
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    const grids = document.querySelectorAll(".grids");
    grids.forEach((grid) => (grid.style.backgroundColor = "white"));
});

// Enable drawing in black
const blackButton = document.querySelector("#black");
blackButton.addEventListener("click", () => {
    container.addEventListener("mouseover", function (e) {
        if (e.target.classList.contains("grids")) {
            e.target.style.backgroundColor = "black";
        }
    });
});

// Enable drawing with random colors
const rgbButton = document.querySelector("#rgb");
rgbButton.addEventListener("click", () => {
    container.addEventListener("mouseover", function (e) {
        if (e.target.classList.contains("grids")) {
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            e.target.style.backgroundColor = randomColor;
        }
    });
});
const container = document.querySelector(".container");

function createDivs(cols, rows) {
    for (let i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            let div = document.createElement("div");
            div.classList.add("grids");
            container.appendChild(div);
        }
    }
}

createDivs(16, 16)
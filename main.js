const container = document.querySelector(".container");
const gridSize = 16;
function createDivs(num) {
    for(let row = 0; row < num; row++){
        for(let col = 0; col < num; col++){
            let div = document.createElement("div");
            div.classList.add("grids");
            container.appendChild(div);
        }
    }
}

createDivs(gridSize)
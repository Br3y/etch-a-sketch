const container = document.querySelector(".container");
const grids = document.querySelectorAll(".grids");
const gridSize = 16;

function createDivs(num) {
    for(let row = 0; row < num; row++){
        for(let col = 0; col < num; col++){
            let div = document.createElement("div");
            div.classList.add("grids");
            div.style.width = `calc(100% / ${gridSize})`;
            container.appendChild(div);
        }
    }
}
createDivs(gridSize)

grids.forEach((grid) => grid.addEventListener("mouseover", ()=>{
    grid.style.backgroundColor = "black";
}));

const container = document.querySelector(".container");
let gridSize = document.querySelector("#range");
gridSize = gridSize.value

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

const grids = document.querySelectorAll(".grids");
grids.forEach((grid) => grid.addEventListener("mouseover", ()=>{
    grid.style.backgroundColor = "black";
}));


const label = document.querySelector("label");
range.addEventListener("mousemove", ()=> {
    label.textContent = "";
    label.textContent = range.value;
    
})
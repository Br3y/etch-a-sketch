// DECLARATION
const container = document.querySelector(".container");

const label = document.querySelector("label");

let range = document.querySelector("#range");

let gridSize = range.value;


// WHEN SCROLLBAR CLICK, GO TO FUNCTION
range.addEventListener("click", moveScroll );

// CHANGING gridsize
function moveScroll(){
    
    range.addEventListener("mousemove", ()=>{
    
        label.textContent = range.value;
    
        removeAllGrids();
        
        gridSize = parseFloat(label.textContent);
        
        createDivs(gridSize)
    
    })

}


// REMOVE ALL GRIDS
function removeAllGrids(){

    while(container.firstChild){

        container.removeChild(container.firstChild)
    
    }

}


// IT WILL CALCULATE GRIDNUMBER * GRIDNUMBER USING FOR LOOP
function createDivs(num) {
    
    for(let row = 0; row < num; row++){

        for(let col = 0; col < num; col++){

            let div = document.createElement("div");

            div.classList.add("grids");

            div.style.width = `calc(100% / ${num})`;

            container.appendChild(div);

        }

    }

}


// CALL createDivs function
createDivs(gridSize)

// DECLARE GRIDS FOR BUTTON
const grids = document.querySelectorAll(".grids");

// IT WILL MAKE SINGLE GRID BLACK WHEN HOVER
function changeToBlackButton(grids){

    grids.forEach((grid) => grid.addEventListener("mouseover", ()=>{

        grid.style.backgroundColor = "black";

    }));

}

changeToBlackButton(grids)


// RESET BUTTON
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", ()=>{

    grids.forEach((grid) => grid.style.backgroundColor = "white");

})


// RESET TO BLACK BUTTON
const blackButton = document.querySelector("#black");

blackButton.addEventListener("click", ()=>{

    changeToBlackButton(grids)

})


// MAKING GRID COLORED RANDOMLY WHEN RGB BUTTON IS CLICK
const rgb = document.querySelector("#rgb");

rgb.addEventListener("click", ()=>{

    grids.forEach((grid) => grid.addEventListener("mouseover", ()=>{

        let randomColor = Math.floor(Math.random() * 16777215).toString(16);

        grid.style.backgroundColor = `#${randomColor}`;

    }));

})

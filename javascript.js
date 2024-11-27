// global variables
let gridSize = 16;

const container = document.getElementById("container");
const gridButton = document.getElementById("grid-button");

gridButton.addEventListener("click", function(event){
    gridSize = prompt("What wsize grid would you like? (Max 100)");
    if(gridSize < 0){gridSize = 0;}
    if(gridSize > 100){gridSize = 100;}
    document.getElementById("spacer").remove();
    CreateGrid(gridSize, gridSize, container);
})

Start();

// called at start of script
function Start(){
    CreateGrid(gridSize, gridSize, container);
}

//Create grid with given width and height inside given container element
function CreateGrid(width, height, container){
    // spacer div for easier removal of whole grid when resized
    const spacer = document.createElement("div");
    spacer.id = "spacer";

    for(let i=0; i<height; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j<width; j++){
            const square = document.createElement("div");
            square.classList.add("square");

            //Event listeners
            CreateHoverListener(square);

            row.appendChild(square);
        }
        spacer.appendChild(row);
    }

    container.appendChild(spacer);
}

// Creates event listeners than handles hovering and licking to draw
function CreateHoverListener(element){
    element.addEventListener("mouseenter", function(event){
        if(event.buttons == 1){
            element.style.backgroundColor = "red";
        }
        else if(event.buttons == 2){
            element.style.backgroundColor = "blue";
        }
    })
}
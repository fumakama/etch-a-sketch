const area = document.getElementById("area");
const button = document.querySelector("button");
let gridSize = 16
createGrid(gridSize);


button.addEventListener('click', () => {
    gridSize = parseInt(prompt("Set the grid size"));
    // Check that the gridSize is not 0 and not greater than 100
    if (gridSize === 0 || isNaN(gridSize)) { 
        gridSize = 16;
    } else if (gridSize > 100) {
        gridSize = 100;
    }
    console.log(gridSize);
    // Clean the area before creating new grid
    area.innerHTML = "";
    createGrid(gridSize);
});

// Create a grid
function createGrid(gridSize) {

    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement("div");
        div.classList.add("row");
        area.appendChild(div);
        for (let j = 0; j < gridSize; j++) {
            let divCell = document.createElement("div");
            divCell.classList.add("cell");
            div.appendChild(divCell);
        }
    }

    // Listen to the hover of the cells 

    const cells = document.querySelectorAll('.cell'); 
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add("blacked");
        });
    });
}





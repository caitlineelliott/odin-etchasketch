const container = document.querySelector('.container');
const containerSize = 800;
let gridSize = 16;

const creatGridRow = () => {
    for (let i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.style.width = `${containerSize / gridSize}px`;
        gridSquare.style.height = `${containerSize / gridSize}px`;
        gridSquare.classList.add('grid-square')
        container.appendChild(gridSquare)
    }
}

const createGrid = () => {
    for (let i = 0; i < gridSize; i++) {
        creatGridRow()
    }

    const gridSquares = Array.from(container.children)

    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.classList.add('black')
        })
    })
}

createGrid()

const resetGrid = () => {
    gridSquares.forEach(gridSquare => {
        gridSquare.classList.remove('black')
    })
}

const changeGridSize = () => {
    const newGridSize = window.prompt('Change Grid Size:')
    gridSize = newGridSize

    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }

    createGrid()
}
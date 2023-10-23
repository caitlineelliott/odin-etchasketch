const container = document.querySelector('.container');
const containerSize = 500;
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
}

createGrid()

const gridSquares = Array.from(container.children)

gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseenter', () => {
        gridSquare.classList.add('black')
    })
})


const resetGrid = () => {
    gridSquares.forEach(gridSquare => {
        gridSquare.classList.remove('black')
    })
}
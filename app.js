const container = document.querySelector('.container');
const gridSize = 16;

const creatGridRow = () => {
    for (let i = 0; i < gridSize; i++) {
        const gridDiv = document.createElement('div')
        gridDiv.classList.add('grid-square')
        container.appendChild(gridDiv)
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

    gridSquare.addEventListener('mouseleave', () => {

        setTimeout(() => {
            gridSquare.classList.remove('black')
        }, 500)
    })
})
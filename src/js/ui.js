import { getPieceType, getPieceColour } from './piece.js'

const renderBoard = (position) => {
  let board = document.createElement('div')
  board.id = 'board'

  // 8 rows
  for (let rank = 0; rank < 8; rank++) {
    const row = document.createElement('div')
    row.className = 'board__row'

    // of 8 squares
    for (let file = 0; file < 8; file++) {
      const squareColour = getSquareColourFromRankAndFile(rank, file)
      const squareIndex = getSquareIndexFromRankAndFile(rank, file)

      const square = document.createElement('div')
      square.classList.add('board__square', squareColour)
      square.dataset.squareIndex = squareIndex

      renderPiece(square, position[squareIndex])

      row.appendChild(square)
    }

    board.appendChild(row)
  }

  document.getElementById('board').replaceWith(board)
}

const renderPiece = (square, piece) => {
  if (piece == Piece.NONE) return

  const svgUrl = getSvgUrlForPiece(piece)

  const pieceDiv = document.createElement('div')
  pieceDiv.style.backgroundImage = `url('${svgUrl}')`

  square.appendChild(pieceDiv)
}

const getSquareColourFromRankAndFile = (rank, file) => {
  return (rank + file) % 2 == 0 ? 'board__square--light' : 'board__square--dark'
}

const getSquareIndexFromRankAndFile = (rank, file) => rank * 8 + file

const getSvgUrlForPiece = (piece) => {
  // get piece name
  // get piece colour
}

const renderDebugIndices = () => {
  const squares = document.querySelectorAll('.board__square')

  squares.forEach((square, position) => {
    const debugIndexDiv = document.createElement('div')
    debugIndexDiv.classList.add('board__debug-position')

    const debugIndexText = document.createTextNode(position)
    debugIndexDiv.appendChild(debugIndexText)

    square.appendChild(debugIndexDiv)
  })
}

renderBoard()
renderDebugIndices()

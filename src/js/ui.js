import {
  Piece,
  getPieceType,
  getPieceColour,
  getPieceTypeName,
} from './piece.js'

/**
 * Renders the given position to #board
 * @param {Array} position
 */
const renderBoard = (position) => {
  let board = document.createElement('div')
  board.id = 'board'
  board.className = 'board'
  board.dataset.currentMovesIndex = null

  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      const squareColour = getSquareColourFromRankAndFile(rank, file)
      const squareIndex = getSquareIndexFromRankAndFile(rank, file)

      const square = document.createElement('div')
      square.classList.add('board__square', squareColour)
      square.dataset.squareIndex = squareIndex

      if (position[squareIndex] != Piece.NONE) {
        renderPiece(square, position[squareIndex])
      }

      board.appendChild(square)
    }
  }

  document.getElementById('board').replaceWith(board)
}

/**
 * Renders piece into square
 * @param {HTMLDivElement} square
 * @param {Piece} piece
 */
const renderPiece = (square, piece) => {
  const svgUrl = getSvgUrlForPiece(piece)

  const pieceDiv = document.createElement('div')
  pieceDiv.style.backgroundImage = `url('${svgUrl}')`
  pieceDiv.className = 'board__piece'
  pieceDiv.addEventListener('click', showMoves)
  pieceDiv.addEventListener('drag', console.log('bosh'))

  square.appendChild(pieceDiv)
}

/**
 * Returns a className based on the rank and file given
 * @param {Number} rank
 * @param {Number} file
 * @return {className} 'board__square--light' | 'board__square--dark'
 */
const getSquareColourFromRankAndFile = (rank, file) => {
  return (rank + file) % 2 == 0 ? 'board__square--light' : 'board__square--dark'
}

/**
 * Returns the index of the square at the given rank and file
 * @param {Number} rank
 * @param {Number} file
 * @return {Number} data-square-index
 */
const getSquareIndexFromRankAndFile = (rank, file) => rank * 8 + file

/**
 * Returns the path to the piece's SVG
 * @param {Piece} piece
 * @return {String} SVG URL
 */
const getSvgUrlForPiece = (piece) => {
  const name = getPieceTypeName(getPieceType(piece))
  const colour = getPieceColour(piece) === Piece.BLACK ? 'BLACK' : 'WHITE'
  return `svg/${name}_${colour}.svg`
}

/**
 * Event Listener Function to show the moves available to the clicked piece
 * @param {MouseEvent} event
 */
const showMoves = (event) => {
  const board = document.getElementById('board')
  const squareIndex = event.target.parentElement.dataset.squareIndex
  const currentMovesIndex = board.dataset['currentMovesIndex']

  hideMoves()

  const isAlreadyShowingMovesForIndex = currentMovesIndex === squareIndex
  if (isAlreadyShowingMovesForIndex) {
    board.dataset['currentMovesIndex'] = null
    return
  }

  const targetsToShow = squareIndex in moves ? moves[squareIndex] : []
  targetsToShow.forEach((targetId) => {
    const element = document.querySelector(`[data-square-index='${targetId}'`)
    element.classList.add('board__target')
  })

  board.dataset['currentMovesIndex'] = squareIndex
}

/**
 * Removes the target class from all squares
 */
const hideMoves = () => {
  const currentlyShownTargets = [
    ...document.getElementsByClassName('board__target'),
  ]
  currentlyShownTargets.forEach((element) =>
    element.classList.remove('board__target')
  )
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

const DEFAULT_POSITION_ARRAY = [
  Piece.ROOK | Piece.BLACK,
  Piece.KNIGHT | Piece.BLACK,
  Piece.BISHOP | Piece.BLACK,
  Piece.QUEEN | Piece.BLACK,
  Piece.KING | Piece.BLACK,
  Piece.BISHOP | Piece.BLACK,
  Piece.KNIGHT | Piece.BLACK,
  Piece.ROOK | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.PAWN | Piece.BLACK,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.NONE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.PAWN | Piece.WHITE,
  Piece.ROOK | Piece.WHITE,
  Piece.KNIGHT | Piece.WHITE,
  Piece.BISHOP | Piece.WHITE,
  Piece.QUEEN | Piece.WHITE,
  Piece.KING | Piece.WHITE,
  Piece.BISHOP | Piece.WHITE,
  Piece.KNIGHT | Piece.WHITE,
  Piece.ROOK | Piece.WHITE,
]

let moves = {
  48: [40, 32],
  49: [41, 33],
}

renderBoard(DEFAULT_POSITION_ARRAY)

// renderDebugIndices()

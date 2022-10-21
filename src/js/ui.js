import {
  Piece,
  getPieceType,
  getPieceColour,
  getPieceClassLetter,
} from './piece.js'

const DragState = {
  NONE: 0,
  DRAGGING_TO_SHOW: 1,
  DRAGGING_TO_HIDE: 2,
}

const UI = {
  currentMovesKey: null,
  boardIsFlipped: false,
  draggedPiece: null,
  dragState: DragState.NONE,
}

/**
 * Renders the given position to #board
 * @param {Array} position
 */
const renderBoard = (position) => {
  let board = document.createElement('div')
  board.id = 'board'
  board.className = 'board'
  board.dataset.currentMovesKey = null
  board.addEventListener('pointerdown', handleBoardPointerDown)
  board.addEventListener('pointerup', handleBoardPointerUp)
  board.addEventListener('pointermove', handleBoardPointerMove)

  position.forEach((row, rankNo) => {
    row.forEach((piece, fileNo) => {
      if (piece !== Piece.NONE) renderPiece(board, piece, rankNo, fileNo)
    })
  })

  document.getElementById('board').replaceWith(board)
}

/**
 * Renders piece into square
 * @param {HTMLDivElement} square
 * @param {Piece} piece
 */
const renderPiece = (board, piece, rank, file) => {
  const pieceDiv = document.createElement('div')
  pieceDiv.classList.add(
    'piece',
    getPieceClassName(piece),
    `r${rank}`,
    `f${file}`
  )
  pieceDiv.addEventListener('pointerdown', handlePiecePointerDown)
  board.appendChild(pieceDiv)
}

/**
 * Pointer down event listener for the Board element
 */
const handleBoardPointerDown = () => {
  console.info('boardPointerDown')
  removeTargets()
  UI.dragState = DragState.NONE
}

const handleBoardPointerMove = (event) => {
  if (UI.draggedPiece) dragPiece(event)
}

/**
 * Board listener function to handle pointer up
 */
const handleBoardPointerUp = (event) => {
  console.info('boardPointerUp')
  if (UI.draggedPiece) stopDragPiece(event)

  // TODO: CLEAN THIS MESS UP
  if (UI.dragState === DragState.DRAGGING_TO_SHOW) {
    UI.dragState = DragState.DRAGGING_TO_HIDE
  } else if (UI.dragState === DragState.DRAGGING_TO_HIDE) {
    removeTargets()
    UI.dragState = DragState.NONE
  }
  console.log(UI.dragState)
}

/**
 * Pointer down event listener for Piece elements
 * @param {Event} event
 */
const handlePiecePointerDown = (event) => {
  const [rank, file] = getRankAndFileTuple(event)
  const thisMovesKey = `${rank},${file}`
  const isAlreadyShowingMovesForKey = thisMovesKey === UI.currentMovesKey

  console.info('piecePointerDown')
  // TODO: CLEAN THIS MESS UP
  if (UI.dragState === DragState.NONE) {
    UI.dragState = DragState.DRAGGING_TO_SHOW
    showTargets(thisMovesKey)
  } else if (
    UI.dragState === DragState.DRAGGING_TO_HIDE &&
    !isAlreadyShowingMovesForKey
  ) {
    UI.dragState = DragState.DRAGGING_TO_SHOW
    removeTargets()
    showTargets(thisMovesKey)
  } else if (UI.dragState === DragState.DRAGGING_TO_SHOW) {
    UI.dragState = DragState.DRAGGING_TO_HIDE
  }
  console.log(UI.dragState)

  beginDragPiece(event)
  event.stopPropagation()
}

/**
 * Listener function to initialise piece dragging
 * @param {Event} event
 */
const beginDragPiece = (event) => {
  UI.draggedPiece = event.target
  UI.draggedPiece.classList.add('dragging')
  dragPiece(event)
}

const dragPiece = (event) => {
  // move UI.draggedPiece to the mouse pos relative to board
  const pieceRect = event.target.getBoundingClientRect()
  const halfPieceHeight = pieceRect.height / 2
  const halfPieceWidth = pieceRect.width / 2

  const boardRect = document.getElementById('board').getBoundingClientRect()
  const yShift =
    ((event.clientY - boardRect.top - halfPieceHeight) / boardRect.height) * 8
  const xShift =
    ((event.clientX - boardRect.left - halfPieceWidth) / boardRect.width) * 8

  UI.draggedPiece.style.setProperty('--xShift', xShift)
  UI.draggedPiece.style.setProperty('--yShift', yShift)
}

/**
 * Listener function to initialise piece dragging
 * @param {Event} event
 */
const stopDragPiece = (event) => {
  // copy code that gets the picked up piece
  const attemptedMove = getRankAndFileTuple(event)
  const thisPieceMoves = moves.get(UI.currentMovesKey)
  console.info({ currentMovesKey: UI.currentMovesKey })
  console.log({ attemptedMove, thisPieceMoves })

  // if (thisPieceMoves && thisPieceMoves.some()) {
  //   let currentClassName = UI.draggedPiece.className
  //   const newClassName = currentClassName
  //     .replace(/r\d/, `r${rank}`)
  //     .replace(/f\d/, `f${file}`)
  //   UI.draggedPiece.className = newClassName
  // }

  UI.draggedPiece.style.removeProperty('--yShift')
  UI.draggedPiece.style.removeProperty('--xShift')
  UI.draggedPiece.classList.remove('dragging')

  // remove previous r/f classes

  UI.draggedPiece = null
}

/**
 * Returns the path to the piece's SVG
 * @param {Piece} piece
 * @return {String} SVG URL
 */
const getPieceClassName = (piece) => {
  const colour = getPieceColour(piece) === Piece.WHITE ? 'w' : 'b'
  const letter = getPieceClassLetter(getPieceType(piece))
  return `${colour}${letter}`
}

/**
 * Event Listener Function to show the moves available to the clicked piece
 * @param {MouseEvent} event
 */
const showTargets = (thisMovesKey) => {
  if (!moves.has(thisMovesKey)) {
    UI.currentMovesKey = null
    return
  }

  const targetsToShow = moves.get(thisMovesKey)
  targetsToShow.forEach(([targetRank, targetFile]) => {
    const target = document.createElement('div')
    target.classList.add('target', 'move', `r${targetRank}`, `f${targetFile}`)
    document.getElementById('board').appendChild(target)
  })

  UI.currentMovesKey = thisMovesKey
}

/**
 * Removes the target class from all squares
 */
const removeTargets = () => {
  let targets = document.getElementsByClassName('target')
  Array.from(targets).forEach((element) => element.remove())
}

/**
 * @param {Event} event
 * @return {Number[]} [rank,file] Moves Key
 */
const getRankAndFileTuple = (event) => {
  const rect = document.getElementById('board').getBoundingClientRect()
  const rank = 7 - Math.floor(((event.clientY - rect.top) / rect.height) * 8)
  const file = Math.floor(((event.clientX - rect.left) / rect.width) * 8)
  return [rank, file]
}

/**
 * Toggles board 'flipped' class
 */
const flipBoard = () => {
  board.classList
  if (UI.boardIsFlipped) board.classList.remove('flipped')
  else board.classList.add('flipped')
  UI.boardIsFlipped = !UI.boardIsFlipped
}

const DEFAULT_POSITION_ARRAY = [
  [
    Piece.ROOK | Piece.WHITE,
    Piece.KNIGHT | Piece.WHITE,
    Piece.BISHOP | Piece.WHITE,
    Piece.QUEEN | Piece.WHITE,
    Piece.KING | Piece.WHITE,
    Piece.BISHOP | Piece.WHITE,
    Piece.KNIGHT | Piece.WHITE,
    Piece.ROOK | Piece.WHITE,
  ],
  [
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
    Piece.PAWN | Piece.WHITE,
  ],
  [
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
  ],
  [
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
  ],
  [
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
  ],
  [
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
    Piece.NONE,
  ],
  [
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
    Piece.PAWN | Piece.BLACK,
  ],
  [
    Piece.ROOK | Piece.BLACK,
    Piece.KNIGHT | Piece.BLACK,
    Piece.BISHOP | Piece.BLACK,
    Piece.QUEEN | Piece.BLACK,
    Piece.KING | Piece.BLACK,
    Piece.BISHOP | Piece.BLACK,
    Piece.KNIGHT | Piece.BLACK,
    Piece.ROOK | Piece.BLACK,
  ],
]

let moves = new Map()
moves.set('1,0', [
  [2, 0],
  [3, 0],
])
moves.set('1,1', [
  [2, 1],
  [3, 1],
])

renderBoard(DEFAULT_POSITION_ARRAY)
document.getElementById('flip-button').addEventListener('click', flipBoard)

// renderDebugIndices()

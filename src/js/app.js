import { renderBoard, flipBoard } from './ui.js'
import { Piece } from './piece.js'

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

export { moves }

renderBoard(DEFAULT_POSITION_ARRAY)
document.getElementById('flip-button').addEventListener('click', flipBoard)

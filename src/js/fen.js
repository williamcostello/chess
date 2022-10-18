import { Piece } from './piece.js'
import Turn from './turn.js'

/**
 * Maps FEN characters to their pieces
 */
export const FEN_MAP = {
  P: Piece.PAWN | Piece.WHITE,
  N: Piece.KNIGHT | Piece.WHITE,
  B: Piece.BISHOP | Piece.WHITE,
  R: Piece.ROOK | Piece.WHITE,
  Q: Piece.QUEEN | Piece.WHITE,
  K: Piece.KING | Piece.WHITE,
  p: Piece.PAWN | Piece.BLACK,
  n: Piece.KNIGHT | Piece.BLACK,
  b: Piece.BISHOP | Piece.BLACK,
  r: Piece.ROOK | Piece.BLACK,
  q: Piece.QUEEN | Piece.BLACK,
  k: Piece.KING | Piece.BLACK,
}

/**
 * Maps file letters to their numeric representation
 */
export const FILE_MAP = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
}

/**
 * Takes a FEN position and returns a positionArray
 * @param {string} position
 * @return {number[]} positionArray
 */
export const parsePosition = (position) => {
  // Initialise 2D array
  let positionArray = new Array(8).fill(0).map(() => new Array(8))
  let positionIndex = 0

  Array.from(position).forEach((char) => {
    const getRank = () => Math.floor(positionIndex / 8)
    const getFile = () => positionIndex % 8

    if (char in FEN_MAP) {
      positionArray[getRank()][getFile()] = FEN_MAP[char]
      positionIndex++
    } else if (!isNaN(char)) {
      const incrementUntil = positionIndex + parseInt(char)
      while (positionIndex < incrementUntil) {
        positionArray[getRank()][getFile()] = Piece.NONE
        positionIndex++
      }
    }
  })

  console.log(positionArray)

  return positionArray
}

/**
 * Takes a FEN turn and returns the turn as a boolean (white = 0)
 * @param {string} turn
 * @returns {boolean} turnBool
 */
export const parseTurn = (turn) => {
  return turn == 'w' ? Turn.WHITE : Turn.BLACK
}

/**
 * Takes a FEN castle string and returns an available castles object
 * @param {string} castles
 * @returns {Object} availableCastles
 */
export const parseCastles = (castles) => {
  const blackKingSide = castles.includes('k')
  const blackQueenSide = castles.includes('q')
  const whiteKingSide = castles.includes('K')
  const whiteQueenSide = castles.includes('Q')

  return {
    blackKingSide,
    blackQueenSide,
    whiteKingSide,
    whiteQueenSide,
  }
}

/**
 * Takes a coordinate string and returns its index on the board
 * @param {string} coordinate
 * @returns {number} boardIndex
 */
export const parseCoordinate = (coordinate) => {
  const isCoordinate = /[a-h][1-8]/
  if (!isCoordinate.test(coordinate)) return null

  const [file, rank] = coordinate.split('')
  return FILE_MAP[file] + 8 * (rank - 1)
}

/**
 * Takes an entire FEN string and parses it
 * @param {string} fen
 * @returns {Object} game state
 */
export const parseFen = (fen) => {
  const [position, turn, castles, enPassant, halfMoveClock, fullMoveCount] =
    fen.split(' ')

  return {
    position: parsePosition(position),
    turn: parseTurn(turn),
    castles: parseCastles(castles),
    enPassant: parseCoordinate(enPassant),
    halfMoveClock: parseInt(halfMoveClock),
    fullMoveCount: parseInt(fullMoveCount),
  }
}

/**
 * Takes a piece and returns its FEN position character
 * @param {number} piece
 * @returns {char}
 */
export const getFenCharacterFromPiece = (piece) => {
  return Object.keys(FEN_MAP).find((key) => FEN_MAP[key] === piece)
}

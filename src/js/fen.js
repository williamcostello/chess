import { Piece } from './piece.js'

/**
 * Maps FEN characters to their pieces
 */
const FEN_MAP = {
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

class Fen {
  static parsePosition(position) {
    // Clean input
    position = position.replace(/[\s\/]/g, '').trim()

    let positionArray = new Array(64)
    let positionIndex = 0
    for (const char of position) {
      if (char in FEN_MAP) {
        positionArray[positionIndex] = FEN_MAP[char]
        positionIndex++
      } else if (/\d/.test(char)) {
        const numberOfBlanks = Number(char)
        const targetIndex = positionIndex + numberOfBlanks

        while (positionIndex < targetIndex) {
          positionArray[positionIndex] = Piece.NONE
          positionIndex++
        }
      }
    }
    return positionArray
  }
}

export default Fen
export { FEN_MAP }

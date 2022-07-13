import Fen from './fen.js'
import { Piece } from './piece.js'

class CLI {
  static printBoard(position) {
    let start = 63 - 7
    let end = 64

    while (start >= 0) {
      let line = ''
      for (let i = start; i < end; i++) {
        line += Fen.getFenCharacterFromPiece(position[i]) ?? '-'
      }
      console.log(line)
      start -= 8
      end -= 8
    }
  }
}

CLI.printBoard([
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
])

export default CLI
